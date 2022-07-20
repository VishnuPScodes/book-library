
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../Romance copy/children.css'
import { Box ,Image, Badge, } from '@chakra-ui/react'
import {AiFillHome} from 'react-icons/ai'
import {  useEffect, useState } from "react"
import axios from "axios"
import { ChildrenCard } from "./ChildrenCard"
import { useDispatch ,useSelector} from "react-redux"
import { dataAddFailure, dataAddRequest, dataAddSuccess, lightModeOn, nightModeOn } from "../../redux/action"
import { ChildrenLoader } from "./ChildrenLoader"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import {ChevronDownIcon,MoonIcon,SunIcon} from '@chakra-ui/icons'
import {ImBooks} from 'react-icons/im'
import Draggable from 'react-draggable';
import { motion, useViewportScroll } from "framer-motion"

import {  useScroll } from "framer-motion"
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
import { Div, MenuButtons,Div2, Div3 } from "./styled/Div"

export const Children=(()=>{
    const [count,setCount]=useState(0);
    const [click,setClick]=useState(false);
    const [search,setSearch]=useState('');
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    let [searchParams,setSearchParams]=useSearchParams();
    const { scrollYProgress } = useScroll();
     // all redux states

     const navigate=useNavigate()
     const loader=useSelector(state=>state?.data.loading)
     const bookSearch=useSelector(state=>state?.data.booksearch);
     const nightmode=useSelector(state=>state?.data.nightmode)


    // Use effect to change the theme
    

    
    useEffect(()=>{
        setSearchParams({})
        dispatch(dataAddRequest())
        axios.get('http://localhost:4000/children').then((res)=>{
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
        setSearchParams({search:`${search}`})
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
        {loader==true?<ChildrenLoader/>:<div > 
         
            <div id="header-pos" >  
        <Heading display={'flex'}  textAlign={'center'}> <div onClick={(()=>{
            navigate('/')
        })} id="home-children" style={{marginLeft:"1.2%"}}><AiFillHome  size={'40px'} /></div>   <div style={{margin:"auto"}}>   Choose your book</div> <Div2  theme={nightmode}><Button  onClick={(()=>{
            setCount(count+1);
            if(count==0){
               dispatch(nightModeOn())
            }
            else{
                dispatch(lightModeOn())
                setCount(0)
            }
            
        })}>{nightmode==true?<MoonIcon/>:<SunIcon/>}</Button></Div2>
    
          </Heading>
        <Stack width={{base:"100%",sm:"100%"}} style={{border:"1px solid grey",height:"90px",width:"100%"}}>
            <div style={{display:"flex"}}>
            <Input id="romance-input" onChange={handleInput}  color='brown'  placeholder="Serach your book"  />
            <Button id="submit-romance" onClick={handleSubmit}>Submit</Button>
           
            </div>
           <div>{bookSearch==true?<div>Searching...</div>:click==1?<div>{data.length} books found</div>:""}</div>
        </Stack>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        </div>


        {/* circle indicator */}
      

         
         {/* Menu button */}
      
    <Stack marginRight={{lg:"95%",md:"85%",sm:"85%",base:"85%"}}  >   
        <Menu >
            <MenuButtons  id="floating-btn-roma" theme={nightmode}>  
  <MenuButton id="menu" opacity={'.7'} zIndex={'10'} position={'fixed'} width={'60px'} height='60px' borderRadius={'50%'} as={Button} >
    <Div3 theme={nightmode}> <ImBooks fontSize={'35px'} />  </Div3>
  
  </MenuButton> 
  </MenuButtons>
  <MenuButtons> 
  <MenuList backgroundColor="brown">
    <MenuItem>Children's Section</MenuItem>
    <MenuItem>Classic Novels</MenuItem>
    <MenuItem>Short Stories</MenuItem>
    
  </MenuList>
   </MenuButtons>
</Menu>
</Stack>  





     
  
        
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.length==0?navigate('/ItemnotFound'): data.map((e)=>{
            
            return <Stack onClick={(()=>{
                navigate(`/ChildrenBookDetails/${e.id}`)
            })} marginTop={{ base:"20px",sm:"20px"}} margin={{base:"",sm:"auto"}} marginLeft={{base:"2.09%",sm:""}}>  <ChildrenCard  name={e.name} image={e.image} rating={e.rate} /> </Stack>
        })}
        </div>

        {/* Footer */}

        <Stack>
            <Heading color={'black'}  > The End </Heading>
        </Stack>
       
    
    </div>}  
    
    </Div>
    
    
})

// scrolling indicator function
function Scroll() {
    const { scrollYProgress } = useScroll();
    
    return (
      <motion.div style={{ scaleX: scrollYProgress }} />  
    )
  }
  