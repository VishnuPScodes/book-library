
import "../Children/romance.css"
import { Audio ,BallTriangle} from  'react-loader-spinner'
import { Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux"

export const DetailsLoader=(()=>{   
    return <Stack  marginLeft={{lg:"46%",sm:"45%",base:"40%"}} marginTop={{lg:"16%" ,base:"20%"}}>
        <BallTriangle id='loader'
    height="100"
    width="100"
    color='brown'
    margin='auto'
    ariaLabel='loading'
  />
    </Stack>
})
