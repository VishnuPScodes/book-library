
import './item.css'
import { Heading } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

export const ItemnotFound=(()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    return <div>
        <div>
            <div style={{margin:"auto"}}>  <Heading>Sorry Book not available</Heading>
           <img style={{margin:"auto"}} src="https://i.pinimg.com/originals/56/32/c1/5632c13a0be038a4a219200e6dd2335d.jpg" alt="sad_image" /> 
           <div>Want to request a book?</div>



           {/* Modal  */}

           
          



           <>
           <button onClick={onOpen} class="button-28" role="button">Request a book</button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
           </div>
          
        </div>
    </div>
})