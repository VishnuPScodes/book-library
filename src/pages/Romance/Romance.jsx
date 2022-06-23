
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../Romance/romance.css'
import { Box ,Image, Badge, } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import { RomanceCard } from "./RomanceCard"
import { useDispatch ,useSelector} from "react-redux"
import { dataAddFailure, dataAddRequest, dataAddSuccess } from "../../redux/action"
import { RomanceLoader } from "./RomanceLoader"
import { Navigate, useNavigate } from "react-router-dom"
export const Romance=(()=>{
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    useEffect(()=>{
        dispatch(dataAddRequest())
        axios.get('https://books-api-bcknd.herokuapp.com/romance').then((res)=>{
            setData(res.data)
            setTimeout(()=>{
                dispatch(dataAddSuccess())
            },1500)
        }).catch(()=>{
            dispatch(dataAddFailure())
        })
    },[])
    // const loader=useSelector(state=>state.loading)
    
    const handleInput=(()=>{
        console.log('yes')
        let romanceBtn=document.getElementById('submit-romance')
        romanceBtn.style.display="block"
    })
    const handleSubmit=(()=>{
        let romanceBtn=document.getElementById('submit-romance');
        romanceBtn.style.display="none"
    })
    const navigate=useNavigate()
    const loader=useSelector(state=>state?.loading)
   
   
    return <div>
        {loader==true?<RomanceLoader/>:<div >
            <div id="header-pos" >  
        <Heading>Choose your book</Heading>
        <Stack width={{base:"100%",sm:"100%"}} style={{border:"1px solid grey",height:"90px",width:"100%"}}>
            <div style={{display:"flex"}}>
            <Input id="romance-input" onChange={handleInput}  placeholder="Serach your book"  />
            <Button id="submit-romance" onClick={handleSubmit}>Submit</Button>
            </div>
           
        </Stack>
        </div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.map((e)=>{
            
            return <Stack onClick={(()=>{
                navigate(`/RomanceBookDetails/${e.id}`)
            })} marginTop={{ base:"20px",sm:"20px"}} margin={{base:"",sm:"auto"}} marginLeft={{base:"2.09%",sm:""}}>  <RomanceCard  name={e.name} image={e.image} rating={e.rating} /> </Stack>
        })}
        </div>
      
    
    </div>}
    </div>
})