
import { Stack,Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export const ExploreDetails=(({name})=>{
    useEffect(()=>{

    },[])
    const datas=useSelector(state=>state.data.singleItem);
    console.log(datas)
    return <>
    <Stack margin={'auto'}  >
       
       <Stack margin={'auto'}  height='500px' width={'50%'}>
        <Heading>{datas.volumeInfo.title}</Heading>
        <div id="img-box">
            <img style={{height:"100%",width:"100%"}} src={datas.volumeInfo.imageLinks.smallThumbnail}  alt="" />
        </div>
        <div  style={{textAlign:"left",fontWeight:"500"}}>
        <p >
        <span id="author">Publisher</span>:{datas.volumeInfo?.publisher}
       </p>
       <p >
        <span id="author">Author</span> :{datas.volumeInfo?.authors[0]}
       </p>
       <p >
       <span id="author">Category</span>  :{datas.volumeInfo?.categories[0]}
       </p>
       <p >
       <span id="author">Page Count</span> :{datas.volumeInfo.pageCount}
       </p>
       <p >
       <span id="author">Published Date</span> :{datas.volumeInfo.publishedDate}
       </p>
       <p >
       <span id="author">Description</span>  :{datas.volumeInfo.description}
       </p>
      
        </div>
      
       </Stack>
     
       
    </Stack>
    </>
})