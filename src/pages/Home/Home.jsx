
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./home.css"

export const Home=(()=>{
    const navigate=useNavigate();
    const handleRomance=(()=>{
        navigate('/Romance')
    })
    return <div>
        <Heading>Choose Your Favorite Section</Heading>

         <Grid id="main-grid" margin={'auto'} gap={6} templateColumns={{lg:"49% 49%" ,sm:"95%"}}>
            <GridItem id="romance" borderRadius={'20px'} h={'400px'} onClick={handleRomance}  bg={{base:"yellow",sm:"red"}} ><Heading id="heading-romance">Romance</Heading></GridItem>
            <GridItem  borderRadius={'20px'} h={'400px'} bg={{base:"green" ,sm:"red",md:"brown"}}><Heading id="heading-children">Children's Section</Heading></GridItem>
            <GridItem  borderRadius={'20px'} h={'400px'} bg={'orange'} >Short Stories</GridItem>
            <GridItem  borderRadius={'20px'} h={'400px'} bg={'yellow'}>Classics Novels</GridItem>
         </Grid>
    </div>
})