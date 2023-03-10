import { Heading } from "@chakra-ui/react"
import { DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"
export const ClassicsLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    return <DivLoader theme={nightmode}>
        <Heading color={'yellow'} >Welcome To Classic Novels Section 😀</Heading>
    </DivLoader>
})