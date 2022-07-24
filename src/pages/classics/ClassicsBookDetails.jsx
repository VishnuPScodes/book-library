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
  import './romance.css'
import { Tooltip } from '@chakra-ui/react';
import { Div2 } from './styled/Div';
import {AiFillHome} from 'react-icons/ai' 
import { FaListOl } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { dataAddFailure, dataAddRequest, dataAddSuccess, wsAddRequest, wsAddSuccess } from '../../redux/action';
import { DetailsLoader } from './DetailsLoader';
import { ButtonDet, Div, DivLoader } from './styled/Div';
import { Input } from 'style-components';
import { MdExplore } from 'react-icons/md'; 
import { nightModeOn } from '../../redux/action';
import { MoonIcon } from '@chakra-ui/icons';
import { lightModeOn } from '../../redux/action';
 import { SunIcon } from '@chakra-ui/icons';
  export const ClassicsBookDetails=()=> {
    const [count,setCount]=useState(0);
    const [comment,setComment]=useState([])
    const [singleData,setSingleData]=useState([])
   
    const {id}=useParams()
    //console.log('id recieved',id)
    const dispatch=useDispatch()
    const loader=useSelector(state=>state.data.loading)
    const nightmode=useSelector(state=>state.data.nightmode)
    const navigate=useNavigate()
    var count2=0;
    
    // comments functions
    const handleCChange=((e)=>{
      const {id,value}=e.target;
      setComment({...comment,
      [id]:value
      })
    })
    const handleComment=(()=>{
      console.log(comment)
     
      fetch(`http://localhost:4000/romance/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    comments:comment
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    })
    useEffect(()=>{
      
        dispatch(dataAddRequest())
        setTimeout(()=>{
          axios.get(`http://localhost:4000/classics/${id}`).then((res)=>{
            setSingleData(res.data)
            dispatch(dataAddSuccess())
      }).catch(()=>{
          dispatch(dataAddFailure())
      })
        },1000)
    
    },[])
    console.log('recieved data',singleData)
    return <Div id="main-romance" theme={nightmode}> {loader==true?<DetailsLoader/>: <Container maxW={'7xl'}>
      <div id='all-icons'>    <div onClick={(()=>{
            navigate('/')
        })} id="home-y-romance" style={{marginLeft:"1.2%"}}><AiFillHome  size={'40px'} /></div> 
        <div id='romance-d-left-icons'>
         <div style={{marginRight:"8%"}}>
        <Div2  theme={nightmode}> 
        <Tooltip label='Explore'>
        <Button  onClick={(()=>{
            dispatch(dataAddRequest())
            navigate('/Explore')
            
        })}  id="explore-y-btn"><MdExplore  /></Button>
          </Tooltip>
          </Div2>
          </div>
          <div style={{marginRight:"8%"}}>
          <Div2 theme={nightmode}>  
        <Tooltip label='Wish list'> 
        <Button onClick={(()=>{
            dispatch(dataAddRequest())
            navigate('/Wishlist')
            
        })}  id='wishlist-y-btn'><FaListOl/></Button>
         </Tooltip>
         </Div2>
         </div> 
         <div style={{marginRight:"8%"}}>
         <Tooltip label='Night mode'> 
         <Div2  theme={nightmode}><Button  onClick={(()=>{
            setCount(count+1);
            if(count==0){
               dispatch(nightModeOn())
            }
            else{
                dispatch(lightModeOn())
                setCount(0)
            }
            
        })}>{nightmode==true?<MoonIcon/>:<SunIcon/> }</Button></Div2>
         </Tooltip> </div>
        </div>  </div>
    
     
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
          color={useColorModeValue('yellow', 'white.00')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }} onClick={(()=>{
            if(count2==0){
              // window.localStorage.setItem('wl',JSON.stringify(singleData))
              //dispatch(wsAddRequest());
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
          bg={useColorModeValue('yellow', 'yellow')}
          color={useColorModeValue('white', 'yellow')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',

          }} disabled={singleData.download==''}>
          Download
        </Button>
       
        {/* <ButtonDet width={'100%'} height="40px">Download</ButtonDet> */}
        
        </a>
        <Stack direction="row" alignItems="center" justifyContent={'center'}>          
        </Stack>
      </Stack>
    </SimpleGrid>
    {/* comments */}
    {/* <Button color={'red'}>Comment...</Button>
    <Stack display={'none'}>
        <div style={{margin:"auto"}}>
          <Input id='name' placeholder='Your name' onChange={handleCChange} width={'40%'} />
          <textarea id='comment' onChange={handleCChange} placeholder='Type your comment...'></textarea>
          <Button color={'red'} onClick={handleComment} > Submit</Button>
        </div>
      </Stack>
      <div id='comment-box' >
        <div id='comment-avatar'></div>
        <div style={{color:"red"}} id='comment-text'>One of the best book i read so far , great story and writing</div>
      </div> */}
  </Container>}
      
      {/* comments section */}

     
     
      </Div>
  }