import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dataAddFailure, dataAddRequest, dataAddSuccess } from '../../redux/action';
  
  export const StoriesDetails=()=> {
    const [singleData,setSingleData]=useState([])
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(dataAddRequest())
        axios.get(`https://books-api-bcknd.herokuapp.com/Romance/${id}`).then((res)=>{
              setSingleData(res.data)
              dispatch(dataAddSuccess())
        }).catch(()=>{
            dispatch(dataAddFailure())
        })
    },[])
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'books image'}
              src={
                singleData.image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {singleData.name}
              </Heading>
              {/* <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                $350.00 USD
              </Text> */}
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 Ajay K Pandey
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
               
  
              </Box>
              <Box>
           
              </Box>
            </Stack>
            <a href={singleData.download} download>   
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Download
            </Button>
            </a>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>          
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }