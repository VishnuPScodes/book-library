


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
  
  export const AdminLogin =()=>{
    
    const[data,setData]=useState([]);
    const navigate=useNavigate();
    const handleChange=((e)=>{
    
     const {id,value}=e.target;
     setData({...data,
    [id]:value
    });
    })
  const handleSubmit=(()=>{
     if(data.email=='psvishnu131@gmail.com' && data.password=="vishnu@123"){
        navigate('/Admin')
     }else{
        alert('Please check your credentials')
     }
  })
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Please login</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input id='email' onChange={handleChange} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input id='password' onChange={handleChange} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.200'}>Forgot password?</Link>
                </Stack>
                <Button border={'1px solif black'}
                  bg={'black'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }