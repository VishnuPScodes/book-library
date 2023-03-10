
import './ws.css'
import { Heading,Image } from '@chakra-ui/react'

export const WsComponent=(({name,image})=>{
    return <div>
        <div id='main-compo' >
        
         
         <img marginRight={'20px'} src={image} height={'100%'} width='60px' />
         <div id='book-name'>{name}</div>
        </div>
    </div>
})