
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../Romance/romance.css'
import { Box ,Image, Badge, } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import { RomanceCard } from "./RomanceCard"
import { useDispatch ,useSelector} from "react-redux"
import { dataAddFailure, dataAddRequest, dataAddSuccess, lightModeOn, nightModeOn } from "../../redux/action"
import { RomanceLoader } from "./RomanceLoader"
import { Navigate, useNavigate } from "react-router-dom"
import {ChevronDownIcon,MoonIcon,SunIcon} from '@chakra-ui/icons'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { Div, MenuButtons,Div2 } from "./styled/Div"
export const Romance=(()=>{
    const [count,setCount]=useState(0);
    const [click,setClick]=useState(false);
    const [search,setSearch]=useState('');
    const dispatch=useDispatch()
    const [data,setData]=useState([])
     // all redux states

     const navigate=useNavigate()
     const loader=useSelector(state=>state?.loading)
     const bookSearch=useSelector(state=>state?.booksearch);
     const nightmode=useSelector(state=>state?.nightmode)


    // Use effect to change the theme
    


    useEffect(()=>{
        dispatch(dataAddRequest())
        axios.get('http://localhost:8080/romance').then((res)=>{
            setData(res.data)
            setTimeout(()=>{
                dispatch(dataAddSuccess())
            },1500)
        }).catch(()=>{
            dispatch(dataAddFailure())
        })
    },[])
    
    const handleInput=((e)=>{
        console.log('yes')
        let romanceBtn=document.getElementById('submit-romance')
        romanceBtn.style.display="block"
        setSearch(e.target.value);
    })

    const handleSubmit=(()=>{
        let romanceBtn=document.getElementById('submit-romance');
        romanceBtn.style.display="none"
        axios.get(`http://localhost:8080/romance?q=${search}`).then((res)=>{
            setData(res.data)
            
        }).then(()=>{
            setClick(true)
        })
        if(data.length==0){
            navigate('/ItemnotFound')
        }
    })
    
   
    return  <Div id="main-romance" theme={nightmode} >   
        {loader==true?<RomanceLoader/>:<div >
            <div id="header-pos" >  
        <Heading display={'flex'} textAlign={'center'}> <div style={{margin:"auto"}}> Choose your book</div> <Div2 theme={nightmode}><Button onClick={(()=>{
            setCount(count+1);
            if(count==0){
               dispatch(nightModeOn())
            }
            else{
                dispatch(lightModeOn())
                setCount(0)
            }
            
        })}>{nightmode==true?<MoonIcon/>:<SunIcon/>}</Button></Div2>  </Heading>
        <Stack width={{base:"100%",sm:"100%"}} style={{border:"1px solid grey",height:"90px",width:"100%"}}>
            <div style={{display:"flex"}}>
            <Input id="romance-input" onChange={handleInput}  placeholder="Serach your book"  />
            <Button id="submit-romance" onClick={handleSubmit}>Submit</Button>
           
            </div>
           <div>{bookSearch==true?<div>Searching...</div>:click==1?<div>{data.length} books found</div>:""}</div>
        </Stack>
        
        </div>
        
        <Stack marginRight={{lg:"85%"}}  >   
        <Menu >
            <MenuButtons theme={nightmode}>  
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categories
  </MenuButton> 
  </MenuButtons>
  <MenuButtons> 
  <MenuList backgroundColor="red">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
   </MenuButtons>
</Menu>
</Stack>  
  
        
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.length==0?navigate('/ItemnotFound'): data.map((e)=>{
            
            return <Stack onClick={(()=>{
                navigate(`/RomanceBookDetails/${e.id}`)
            })} marginTop={{ base:"20px",sm:"20px"}} margin={{base:"",sm:"auto"}} marginLeft={{base:"2.09%",sm:""}}>  <RomanceCard  name={e.name} image={e.image} rating={e.rate} /> </Stack>
        })}
        </div>
       
    
    </div>}  
    
    </Div>
    
    
})
