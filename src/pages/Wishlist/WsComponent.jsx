
import './ws.css'
import { Heading,Image } from '@chakra-ui/react'

export const WsComponent=(({name})=>{
    return <div>
        <div id='main-compo' >
         <div id='book-name'>{name}</div>
         
         <img marginLeft={'20px'} src='https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png' height={'100%'} width='60px' />
        </div>
    </div>
})