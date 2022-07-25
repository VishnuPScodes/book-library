
import './item.css'

import { Checkbox, Heading, Spinner, Stack } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fadeIn } from 'react-animations'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
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
  import { SelectField,Select } from '@chakra-ui/react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dataAddFailure, dataAddRequest, dataAddSuccess } from '../redux/action'

export const ItemnotFound=(()=>{
  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const [data,setData]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Redux 
    const dispatch=useDispatch();
    const loading=useSelector(state=>state.data.loading)
    useEffect(()=>{
      setData({...data,date})
    },[])


  const handleChange=((e)=>{
    const {id,value}=e.target;
    setData({...data,
    [id]:value
    })
  })
  const handleSubmit=(()=>{
   console.log('data',data)
    dispatch(dataAddRequest());
    axios.post('http://localhost:4000/posts',data).then(()=>{
        dispatch(dataAddSuccess())
    }).then(()=>{
      alert('Data added successfully')
    })
    .catch(()=>{
      dispatch(dataAddFailure())
      alert('Sorry unable to submit your request at the moment ,please try later')
    })
  })
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  //email js codes
  const sendEmail=(()=>{
    emailjs.send('gmail', 'template_r4rnpdf', data,'3HVjovw71e1Z8EEv3')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  })

    return <div>
        <div>
            <div style={{margin:"auto"}}>   <Heading>Sorry the book is not available</Heading>
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
              <FormLabel>Full name</FormLabel>
              <Input id='full_name' onChange={handleChange} ref={initialRef} placeholder='Full name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Book name</FormLabel>
              <Input id='book_name' onChange={handleChange}  placeholder='Book name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel requiredIndicator={'Required'}>Email id</FormLabel>
              <Input id='email' onChange={handleChange} required placeholder='Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel  requiredIndicator={'Required'}>Category</FormLabel>
              <Select id='category' onChange={handleChange}>
                <option value="romance">Romance Books</option>
                <option value="children's">Children's Books</option>
                <option value="short stories">Short stories</option>
                <option value="classics">Classics</option>
              </Select>
              <Checkbox id='date' onChange={handleChange} value={date} >All informations provided above are correct</Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
              {loading==true?<Spinner/>:"Submit"}
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