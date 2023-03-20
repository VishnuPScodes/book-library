import { Heading } from "@chakra-ui/react"
import { Div, DivLoader } from "./styled/Div"
import { useSelector } from "react-redux"
import AnimatedText from 'react-animated-text-content';
import Pulse from "react-reveal/Pulse";

export const RomanceLoader=(()=>{
    const nightmode=useSelector(state=>state.nightmode)
    console.log(nightmode ,'nm')

    return (
      <DivLoader theme={nightmode}>
        <Pulse >
          <Heading color={"red.500"}>Welcome To Romance Section🥰 </Heading>
        </Pulse>
      </DivLoader>
    );
})