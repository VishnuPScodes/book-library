import { Heading } from "@chakra-ui/react"
import { Div } from "./styled/Div"
import { useSelector } from "react-redux"
import AnimatedText from 'react-animated-text-content';


export const RomanceLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    console.log(nightmode ,'nm')

    return <Div theme={nightmode}>
        <Heading color={'red.500'} >Welcome To Romance Section🥰 </Heading>
        
       
    </Div>
})