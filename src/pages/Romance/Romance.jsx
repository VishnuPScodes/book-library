
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../Romance/romance.css'
import { Box ,Image, Badge, } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import { RomanceCard } from "./RomanceCard"
export const Romance=(()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/mock').then((res)=>{
            setData(res.data)
        })
    },[])
    
    const handleInput=(()=>{
        console.log('yes')
        let romanceBtn=document.getElementById('submit-romance')
        romanceBtn.style.display="block"
    })
    const handleSubmit=(()=>{
        let romanceBtn=document.getElementById('submit-romance');
        romanceBtn.style.display="none"
    })
    return <div>
        <Heading>Choose your book</Heading>
        <Stack width={{base:"100%",sm:"100%"}} style={{border:"1px solid grey",height:"90px",width:"100%"}}>
            <div style={{display:"flex"}}>
            <Input id="romance-input" onChange={handleInput}  placeholder="Serach your book"  />
            <Button id="submit-romance" onClick={handleSubmit}>Submit</Button>
            </div>
           
        </Stack>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.map((e)=>{
            
            return <Stack marginTop={{ base:"20px",sm:"20px"}} margin={{base:"",sm:"auto"}} marginLeft={{base:"2.09%",sm:""}}>  <RomanceCard  name={e.first_name} /> </Stack>
        })}
        </div>
      
    
    </div>
})