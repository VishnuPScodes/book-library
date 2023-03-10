import { Heading } from "@chakra-ui/react"
import { Div, DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"
import AnimatedText from 'react-animated-text-content';


export const RomanceLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    console.log(nightmode ,'nm')

    return <DivLoader theme={nightmode}>
        <Heading color={'red.500'} >Welcome To Romance Section🥰 </Heading>
        
       
    </DivLoader>
})