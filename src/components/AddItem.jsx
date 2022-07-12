import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack,
    Input
  } from '@chakra-ui/react'



export const AddItem=(()=>{
    return <Stack>
    <FormControl isRequired>
    <FormLabel htmlFor='Boo-name'>Book name</FormLabel>
    <Input id='first-name' placeholder='First name' />
    <FormLabel htmlFor='first-name'>Author</FormLabel>
    <Input id='first-name' placeholder='Author' />
    <FormLabel htmlFor='first-name'>Category</FormLabel>
    <Input id='first-name' placeholder='Category' />
    <FormLabel htmlFor='first-name'>Image url</FormLabel>
    <Input id='first-name' placeholder='Image url' />
    <FormLabel htmlFor='first-name'>Rating</FormLabel>
    <Input id='first-name' placeholder='Rating' />
    <FormLabel htmlFor='first-name'>Description</FormLabel>
    <Input id='first-name' placeholder='Description' />
    </FormControl>
    </Stack>
})