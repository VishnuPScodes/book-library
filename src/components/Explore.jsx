import { Button, Input, Spinner, Stack } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RomanceCard } from "../pages/Romance/RomanceCard";
import {useNavigate} from 'react-router-dom'
import { addSingleItem, bookSearchRequest, bookSearchSuccess } from "../redux/action";
import { SearchBar } from "./SearchComponents/Searchbar";



export const Explore=(()=>{
    const [bookname,setBookname]=useState('');
    const [bookshelf,setBookshelf]=useState([])
    const loading=useSelector(state=>state.data.booksearch)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleClick=(()=>{
        dispatch(bookSearchRequest())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`).then((e)=>{
            setBookshelf(e.data)
            dispatch(bookSearchSuccess())
        })
    }) 
    console.log(bookshelf)
 
    return <div>
        <Stack display={'flex'}>   <Input placeholder="Search any book " onChange={((e)=>{
            setBookname(e.target.value)
        })}  /> 
    <Button onClick={handleClick}>{loading==true?<Spinner/>:"Search"}</Button> </Stack>
        <div  >
            {bookshelf?.items?.map((e)=>{
                return (
                    <div onClick={(()=>{
                        dispatch(addSingleItem(e));
                        navigate('/ExploreDetails')
                    })}>  
                    <SearchBar image={e.volumeInfo.imageLinks?.thumbnail} rating={e.volumeInfo.ratingsCount} name={e.volumeInfo.title}   />
                    </div>
                    
                )
            })}
           
        </div>
    </div>

})