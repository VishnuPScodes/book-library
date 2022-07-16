
import { useSelector } from "react-redux"
import { Heading,Stack } from "@chakra-ui/react"
import { WsComponent } from "./WsComponent"
import { Button } from "@chakra-ui/react"
import './ws.css'
import { useEffect, useState } from "react"

export const Wishlist=(()=>{
    const [data,setData]=useState([]);
    const wishdata=useSelector(state=>state.data.ws)
    console.log(wishdata)
    var count=0;
    let dataFromLc=JSON.parse(window.localStorage.getItem('wl'))
    if(wishdata.length>=dataFromLc.length){
        window.localStorage.setItem('wl',JSON.stringify(wishdata))
    }
    dataFromLc=JSON.parse(window.localStorage.getItem('wl'))
   
    useEffect(()=>{
       
        if(wishdata>dataFromLc){
             setData(wishdata)
        }
      
        
        console.log('from lc ',dataFromLc)
    },[count])
   
    
    return <div>
       <Heading textDecor={'underline'}>Wish list</Heading>
       <div id="single-ws">
        {dataFromLc?.map((e)=>{
            return (
                <WsComponent name={e.name} />
            )
        })}
        
         <div id="btn-compo">
            <Button  onClick={(()=>{
                window.localStorage.setItem('wl',JSON.stringify([]))
                count++
                alert('Books saved successfully')
            })} id="btn-com">Clear</Button>
         </div>
       </div>

    </div>
})