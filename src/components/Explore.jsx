import { Button, Input, Stack } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react"
import { RomanceCard } from "../pages/Romance/RomanceCard";
import { SearchBar } from "./SearchComponents/Searchbar";



export const Explore=(()=>{
    const [bookname,setBookname]=useState('');
    const [bookshelf,setBookshelf]=useState([])
    const handleClick=(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`).then((e)=>{
            setBookshelf(e.data)
        })
    }) 
    console.log(bookshelf)
 
    return <div>
        <Stack display={'flex'}>   <Input placeholder="Search any book " onChange={((e)=>{
            setBookname(e.target.value)
        })}  /> 
    <Button onClick={handleClick}>Search</Button> </Stack>
        <div  >
            {bookshelf?.items?.map((e)=>{
                return (
                    <SearchBar image={e.volumeInfo.imageLinks?.thumbnail} rating={e.volumeInfo.ratingsCount} name={e.volumeInfo.title}  />
                    
                )
            })}
           
        </div>
    </div>

})