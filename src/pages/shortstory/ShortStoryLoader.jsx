import { Heading } from "@chakra-ui/react"
import { Div, DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"

export const ShortStoryLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    return <DivLoader theme={nightmode}>
        <Heading color={'orange'} >Welcome To Short Stories Section🥰 </Heading>
    </DivLoader>
})