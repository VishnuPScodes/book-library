
import { useSelector } from "react-redux"
import { Heading } from "@chakra-ui/react"

export const Wishlist=(()=>{
    const wishdata=useSelector(state=>state.data.ws)
    return <div>
       <Heading textDecor={'underline'}>Wish list</Heading>
       <Stack></Stack>

    </div>
})