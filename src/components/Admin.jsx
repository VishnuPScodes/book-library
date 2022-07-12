
import { Heading, Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import './item.css'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Button } from "style-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Admin=(({name,id,date,category})=>{
    const {auth}=useSelector(state=>state.auth.auth);
    const [data,setData]=useState([])
    const navigate=useNavigate();
    console.log(auth,'is')
    useEffect(()=>{
      axios.get('http://localhost:8080/admin').then((e)=>{
           setData(e.data)
      })
    },[])
    console.log('data is ',data)
    // Current date 
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    return <div>
        <Stack display={'flex'}>  <Heading display={'flex'}>Welcome to admin page</Heading> <Button id="admin-btn">Add new item</Button></Stack>
       
        
        
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Sl No</Th>
        <Th>Book Name</Th>
        <Th >Category</Th>
        <Th>Requested Date</Th>
        <Th>Take ACTION</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((e)=>{
        return   <Tr>
        <Td>{e.id}</Td>
        <Td>{e.book_name}</Td>
        <Td >{e.category}</Td>
        <Td >{date}</Td>
        <Td > <div style={{display:"flex"}}> <button style={{border:"1px solid black",backgroundColor:"white"}} onClick={(()=>{
          navigate('/AddItem')
        })} >Add book</button> Or <button onClick={(()=>{
          axios.delete(`http://localhost:8080/admin/${e.id}`)
        })} style={{border:"1px solid black",backgroundColor:"white"}}>Remove</button></div> </Td>
      </Tr>
      })}
    
    
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
})
