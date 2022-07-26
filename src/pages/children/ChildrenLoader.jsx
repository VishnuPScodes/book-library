import { Heading } from "@chakra-ui/react"
import {  DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"



export const ChildrenLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    console.log(nightmode ,'nm')

    return <DivLoader theme={nightmode}>
        <Heading color={'brown'} >Welcome To Children's  Section🤩 </Heading>
        
       
    </DivLoader>
})