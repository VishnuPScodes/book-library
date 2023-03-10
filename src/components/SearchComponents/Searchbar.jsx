import { Stack } from "@chakra-ui/react"
import { MdMargin } from "react-icons/md"
import { Image } from '@chakra-ui/react'



export const SearchBar=(({image,name,rating})=>{
    return <Stack  height={'200px'} width={'95%'}  margin='auto' display='flex' marginTop={'20px'}>
       {/* <Image src={image} height={'100%'} /> */}
       <div style={{display:"flex"}} >  <img src={image} height="100%" width={'200px'} alt={'no image'} />
       
       <span style={{textAlign:"center"}}>{name}</span>  </div>
      
     
        
          
      
    </Stack>
})