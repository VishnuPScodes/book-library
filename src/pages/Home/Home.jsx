
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./home.css"
export const Home=(()=>{
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
    const hoverClassics=(()=>{
        let heading=document.getElementById('heading-main')
        heading.innerHTML='Choose Classics'
    })
    const hoverShortstory=(()=>{
        let heading=document.getElementById('heading-main')
        heading.innerHTML='Choose Short stories'
    })
    const hoverChildren=(()=>{
        let heading=document.getElementById('heading-main')
        heading.innerHTML="Choose Children's Section"
    })
    return <div id="home-container-main">   
        <Stack   id="home-box"> 
        <Heading id='heading-main' >Choose Your Favorite Section</Heading>
        </Stack>
         <Grid id="main-grid" margin={'auto'} gap={6} templateColumns={{lg:"49% 49%" ,sm:"95%"}}>
            
            <GridItem id="romance" borderRadius={'20px'} h={'400px'} onMouseOut={hoverMain}  onMouseEnter={hoverRomance}  onClick={handleRomance}  bg={'red'} ><Heading id="heading-romance">Romance</Heading></GridItem>
            <GridItem  id="children" borderRadius={'20px'} h={'400px'} onMouseOut={hoverMain}  onMouseEnter={hoverChildren} onClick={handleChildren} bg={'brown'}><Heading id="heading-children">  Children's Section</Heading></GridItem>
           <GridItem onClick={(()=>{
            navigate('/Shortstory')
           })} id="shortstory"  borderRadius={'20px'} h={'400px'} onMouseOut={hoverMain}  onMouseEnter={hoverShortstory} bg={'orange'} ><Heading id="heading-short" >  Short Stories</Heading></GridItem> 
            <GridItem id="classics" onClick={(()=>{
                navigate('/classics')
            })} borderRadius={'20px'} h={'400px'} onMouseOut={hoverMain}  onMouseEnter={hoverClassics} bg={'yellow'}><Heading id="heading-classics" >  Classics</Heading></GridItem>
         </Grid>
    </div>
})