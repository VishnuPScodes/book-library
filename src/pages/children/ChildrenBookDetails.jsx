import {
    Box,
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

  } from '@chakra-ui/react';
  import '../children/romance.css'
import { Tooltip } from '@chakra-ui/react';
import { Div2 } from './styled/Div';
import {AiFillHome} from 'react-icons/ai' 
import { FaListOl } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { dataAddFailure, dataAddRequest, dataAddSuccess,wsAddSuccess } from '../../redux/action';
import { DetailsLoader } from './DetailsLoader';
import { Div } from './styled/Div';
import { MdExplore } from 'react-icons/md'; 
import { nightModeOn } from '../../redux/action';
import { lightModeOn } from '../../redux/action';
import { MoonIcon } from '@chakra-ui/icons';
 import { SunIcon } from '@chakra-ui/icons';
  export const ChildrenBookDetails=()=> {
    const [count,setCount]=useState(0);
   
    const [singleData,setSingleData]=useState([])
    
    const {id}=useParams()
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const loader=useSelector(state=>state.data.loading)
    const nightmode=useSelector(state=>state.data.nightmode)
    var count2=0;
    useEffect(()=>{     
        dispatch(dataAddRequest())
        setTimeout(()=>{
        axios
          .get(`https://uninterested-elk-cardigan.cyclic.app/children/${id}`)
          .then((res) => {
            setSingleData(res.data);
            dispatch(dataAddSuccess());
          })
          .catch(() => {
            dispatch(dataAddFailure());
          });
      },0)
    },[])

    return <Div id="main-romance" theme={nightmode}> {loader==true?<DetailsLoader/>: <Container maxW={'7xl'}>
      <div id='all-icons'>    <div onClick={(()=>{
            navigate('/')
        })} id="home-romance" style={{marginLeft:"1.2%"}}><AiFillHome  size={'40px'} /></div> 
   </div>
    
     
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
             {singleData.author}
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
        {/* Wish list button */}

        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('white.00', 'white.0')}
          color={useColorModeValue('brown', 'white.00')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }} onClick={(()=>{
            if(count2==0){
             
              dispatch(wsAddSuccess(singleData))
              alert('Added to wish list successfully');
              count2++
            }
            else{
              alert('You already added this book')
            }
            
          })} >
          ADD TO WISHLIST
        </Button>



        <a href={singleData.download} download>   
        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('brown.00', 'brown.0')}
          color={useColorModeValue('white', 'brown.00')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',

          }} disabled={singleData.download==''}>
          Download
        </Button>
       
      
        
        </a>
        <Stack direction="row" alignItems="center" justifyContent={'center'}>          
        </Stack>
      </Stack>
    </SimpleGrid>
   
  </Container>}
      
    

     
     
      </Div>
  }