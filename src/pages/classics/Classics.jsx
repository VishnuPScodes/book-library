
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../classics/romance.css'
import {AiFillHome} from 'react-icons/ai'
import {  useEffect, useState } from "react"
import axios from "axios"
import { ClassicsCard } from "./ClassicsCard"
import { useDispatch ,useSelector} from "react-redux"
import { dataAddFailure, dataAddRequest, dataAddSuccess, lightModeOn, nightModeOn, wsAddSuccess } from "../../redux/action"
import { ClassicsLoader } from "./ClassicsLoader"
import { useNavigate,  } from "react-router-dom"
import {MoonIcon,SunIcon} from '@chakra-ui/icons'
import {ImBooks} from 'react-icons/im'
import {FaListOl} from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'
import {MdExplore} from 'react-icons/md'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { Div, MenuButtons,Div2, Div3 } from "./styled/Div"

export const Classics=(()=>{
    const [count,setCount]=useState(0);
    const [click,setClick]=useState(false);
    const [search,setSearch]=useState('');
    const dispatch=useDispatch()
    const [data,setData]=useState([])
     // all redux states
     const navigate=useNavigate()
     const loader=useSelector(state=>state?.data.loading)
     const bookSearch=useSelector(state=>state?.data.booksearch);
     const nightmode=useSelector(state=>state?.data.nightmode)
    useEffect(()=>{
        dispatch(dataAddRequest())
        axios.get('https://uninterested-elk-cardigan.cyclic.app/classics').then((res)=>{
            setData(res.data)
            setTimeout(()=>{
                dispatch(dataAddSuccess())
            },500)
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
        axios.get(`https://uninterested-elk-cardigan.cyclic.app/classics/search/${search}`).then((res)=>{
            setData(res.data)
            
        }).then(()=>{
            setClick(true)
        })
        if(data.length==0){
            navigate('/ItemnotFound')
        }
    })
    return  <Div id="main-romance" theme={nightmode} >   
        {loader==true?<ClassicsLoader/>:<div > 
         
            <div id="header-pos" >  
        <Heading display={'flex'}  textAlign={'center'}>    <div onClick={(()=>{
            navigate('/')
        })} id="home-y-romance" style={{marginLeft:"1.2%"}}><AiFillHome   size={'40px'} /></div>   <div style={{margin:"auto"}}>   Choose your book</div>
        <Div2 theme={nightmode}> 
        <Tooltip label='Explore'>
        <Button onClick={(()=>{
            dispatch(dataAddRequest())
            navigate('/Explore')
            
        })} marginTop={'5px'} marginRight={'2%'} id="explore-y-btn"><MdExplore  /></Button>
          </Tooltip>
          </Div2>
          <Div2 theme={nightmode}>  
        <Tooltip label='Wish list'> 
        <Button onClick={(()=>{
            dispatch(dataAddRequest())
            navigate('/Wishlist')
            
        })} marginTop={'5px'} marginRight={'2%'} id='wishlist-btn'><FaListOl/></Button>
         </Tooltip>
         </Div2>
        
         <Tooltip label='Night mode'> 
         <Div2  theme={nightmode}><Button  onClick={(()=>{
            setCount(count+1);
            if(count==0){
               dispatch(nightModeOn())
            }
            else{
                dispatch(lightModeOn())
                setCount(0)
            }
            
        })}>{nightmode==true?<MoonIcon/>:<SunIcon/>}</Button></Div2>
         </Tooltip>
    
          </Heading>
        <Stack width={{base:"100%",sm:"100%"}} style={{border:"1px solid grey",height:"90px",width:"100%"}}>
            <div style={{display:"flex"}}>
            <Input id="romance-input" onChange={handleInput}  placeholder="Serach your book"  />
            <Button id="submit-romance" onClick={handleSubmit}>Submit</Button>
           
            </div>
           <div>{bookSearch==true?<div>Searching...</div>:click==1?<div>{data.length} books found</div>:""}</div>
        </Stack>     
        </div>
      
         {/* Menu button */}
      
    <Stack marginRight={{lg:"95%",md:"85%",sm:"85%",base:"85%"}}  >   
        <Menu >
            <MenuButtons  id="floating-btn-roma" theme={nightmode}>  
  <MenuButton id="menu" opacity={'.7'} zIndex={'10'} position={'fixed'} width={'60px'} height='60px' borderRadius={'50%'} as={Button} >
    <Div3 theme={nightmode}> <ImBooks fontSize={'35px'} />  </Div3>
  
  </MenuButton> 
  </MenuButtons>
  <MenuButtons> 
  <MenuList backgroundColor="yellow">
    <MenuItem onClick={(()=>{
        navigate('/Children')
    })}>Children's Section</MenuItem>
    <MenuItem onClick={(()=>{
        navigate('/Romance')
    })}> Romance Novels</MenuItem>
    <MenuItem onClick={(()=>{
        navigate('/Shortstory')
    })}>Short Stories</MenuItem>
    
  </MenuList>
   </MenuButtons>
</Menu>
</Stack>  
               {/* all books       */}
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.length==0?navigate('/ItemnotFound'): data.map((e)=>{
            
            return <Stack onClick={(()=>{
                navigate(`/ClassicsBookDetails/${e._id}`)
            })} marginTop={{ base:"20px",sm:"20px"}} margin={{base:"",sm:"auto"}} marginLeft={{base:"2.09%",sm:""}}>  <ClassicsCard  name={e.name} image={e.image} rating={e.rate} /> </Stack>
        })}
        </div>

        {/* Footer */}

        <Stack>
            <Heading color={'black'}  > The End </Heading>
        </Stack>
       
    
    </div>}  
    
    </Div>
    
    
})
