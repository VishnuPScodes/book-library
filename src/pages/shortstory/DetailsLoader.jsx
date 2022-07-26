
import "../Romance/romance.css"
import {BallTriangle} from  'react-loader-spinner'
import { Stack } from "@chakra-ui/react"
export const DetailsLoader=(()=>{
    return <Stack  marginLeft={{lg:"46%",sm:"45%",base:"40%"}} marginTop={{lg:"16%" ,base:"20%"}}>
    <BallTriangle id='loader'
    height="100"
    width="100"
    color='orange'
    margin='auto'
    ariaLabel='loading'
  />
    </Stack>
})
