
import { useDispatch, useSelector } from "react-redux"
import { Heading,Stack } from "@chakra-ui/react"
import { WsComponent } from "./WsComponent"
import { Button } from "@chakra-ui/react"
import './ws.css'
import { useEffect, useState } from "react"
import { dataAddSuccess } from "../../redux/action"
import { RomanceLoader } from "../Romance/RomanceLoader"
import { DetailsLoader } from "../Romance/DetailsLoader"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React from "react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { useDisclosure ,AlertDialogCloseButton} from "@chakra-ui/react"
export const Wishlist=(()=>{
    const navigate=useNavigate()
    const dataLoading=useSelector(state=>state.data.loading)
    const dispatch=useDispatch()
    const [data,setData]=useState([]);
    const wishdata=useSelector(state=>state.data.ws)
    console.log(wishdata)
    var count=0;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
   
   // console.log('data from lc',dataFromLc)
    window.localStorage.setItem('wl',JSON.stringify(wishdata))
    let dataFromLc=JSON.parse(window.localStorage.getItem('wl'))
    if(wishdata.length>=dataFromLc.length){
        window.localStorage.setItem('wl',JSON.stringify(wishdata))
    }
    dataFromLc=JSON.parse(window.localStorage.getItem('wl'))
    setTimeout(()=>{
        dispatch(dataAddSuccess())
    },500)
   
    useEffect(()=>{
       
        if(wishdata>dataFromLc){
             setData(wishdata)
        }
      
        
        console.log('from lc ',dataFromLc)
    },[count])
   
    
    return <> {dataLoading==true?<DetailsLoader/>: <div>
        <Heading textDecor={'underline'}>Wish list</Heading>
        <div id="single-ws">
         {dataFromLc?.map((e)=>{
             return (
                 <WsComponent image={e.image} name={e.name} />
             )
         })}
         
          <div id="btn-compo">
             <Button onClick={onOpen}  id="btn-com">Clear</Button>
          </div>
          <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Remove your wish lists?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove all of your wish lists? {dataFromLc.length} wish lists will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3}  onClick={(()=>{
           window.localStorage.removeItem('wl')
           count++
           navigate('/')
})}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </div>
 
     </div>} 
    </>
})




