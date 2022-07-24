import { Heading } from "@chakra-ui/react"
import { Div, DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"
import AnimatedText from 'react-animated-text-content';


export const ClassicsLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    console.log(nightmode ,'nm')

    return <DivLoader theme={nightmode}>
        <Heading color={'yellow'} >Welcome To Classic Novels Section🥰 </Heading>
        
       
    </DivLoader>
})