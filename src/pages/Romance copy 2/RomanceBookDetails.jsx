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
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { dataAddFailure, dataAddRequest, dataAddSuccess } from '../../redux/action';
import { DetailsLoader } from './DetailsLoader';
import { ButtonDet, Div, DivLoader } from './styled/Div';
  
  export const RomanceBookDetails=()=> {
    const [singleData,setSingleData]=useState([])
    const {id}=useParams()
    const dispatch=useDispatch()
    const loader=useSelector(state=>state.data.loading)
    const nightmode=useSelector(state=>state.data.nightmode)
    useEffect(()=>{
        dispatch(dataAddRequest())
        setTimeout(()=>{
          axios.get(`http://localhost:8080/romance/${id}`).then((res)=>{
            setSingleData(res.data)
            dispatch(dataAddSuccess())
      }).catch(()=>{
          dispatch(dataAddFailure())
      })
        },1000)
    
    },[])
    
    return <Div id="main-romance" theme={nightmode}> {loader==true?<DetailsLoader/>: <Container maxW={'7xl'}>
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
        
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '560px' }}
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
             {singleData.name}
            </Text>
            <Text id='text-details' fontSize={'lg'}>
              {singleData.des}.
            </Text>
          </VStack>
          <Box>
           

          </Box>
          <Box>
       
          </Box>
        </Stack>
        <a href={'https://drive.google.com/file/d/19hNHtxDzjiui7COZqA2IRLc22j3w4vUA/view?usp=sharing'} download>   
        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('red.00', 'red.0')}
          color={useColorModeValue('white', 'red.00')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}>
          Download
        </Button>
       
        {/* <ButtonDet width={'100%'} height="40px">Download</ButtonDet> */}
        
        </a>
        <Stack direction="row" alignItems="center" justifyContent={'center'}>          
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>}
      
      {/* comments section */}

      
     
      </Div>
  }