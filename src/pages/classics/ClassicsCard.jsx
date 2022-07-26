import {Box,Image,Badge} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const ClassicsCard=({name,image,rating})=>{
    const property = {
      imageUrl: 'https://www.bookgeeks.in/wp-content/uploads/2020/05/Will-You-Still-Love-Me-Ravinder-Singh.jpg',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,     
    } 
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={image} height="550px" alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            
            </Box>
          </Box>
      
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {name}
          </Box>
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? 'yellow' : 'gray.300'}
                />
              ))}
          </Box>
        </Box>
      </Box>
    )
  }


 