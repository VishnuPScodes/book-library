
import { Stack,Heading,Input ,Button} from "@chakra-ui/react"
import '../Romance/romance.css'
import { Box ,Image, Badge, } from '@chakra-ui/react'


export const Romance=(()=>{
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
      
    
    </div>
})