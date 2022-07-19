
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./home.css"
import Draggable from 'react-draggable';
import { useSelector } from "react-redux";
export const Home=(()=>{
    const reduxData=useSelector(state=>state.data.ws);
    let lcdata=JSON.parse(window.localStorage.getItem('wl'));
    if(lcdata==null){
        window.localStorage.setItem('wl',JSON.stringify([]))
    }
   
    
    console.log('local data',lcdata)
    const navigate=useNavigate();
    const handleRomance=(()=>{
        navigate('/Romance')
    })
    const handleChildren=(()=>{
        navigate('/Children')
    })
    // hover properties
    const hoverRomance=(()=>{
       let heading=document.getElementById('heading-main')
       heading.innerHTML='Choose Romance'
    })
    const hoverMain=(()=>{
        let heading=document.getElementById('heading-main')
        heading.innerHTML='Choose Your Favorite Section'
    })
    return <div id="home-container-main">   
        <Stack   id="home-box"> 
        <Heading id='heading-main' >Choose Your Favorite Section</Heading>
        </Stack>
         <Grid id="main-grid" margin={'auto'} gap={6} templateColumns={{lg:"49% 49%" ,sm:"95%"}}>
            
            <GridItem id="romance" borderRadius={'20px'} h={'400px'} onMouseOut={hoverMain}  onMouseEnter={hoverRomance}  onClick={handleRomance}  bg={{base:"yellow",sm:"red"}} ><Heading id="heading-romance">Romance</Heading></GridItem>
            <GridItem  id="children" borderRadius={'20px'} h={'400px'} onClick={handleChildren} bg={{base:"green" ,sm:"red",md:"brown"}}><Heading id="heading-children">  Children's Section</Heading></GridItem>
           <GridItem id="shortstory"  borderRadius={'20px'} h={'400px'} bg={'orange'} >Short Stories</GridItem> 
            <GridItem id="classics"  borderRadius={'20px'} h={'400px'} bg={'yellow'}>Classics Novels</GridItem>
         </Grid>
    </div>
})