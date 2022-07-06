
import './item.css'
import { Heading } from "@chakra-ui/react"

export const ItemnotFound=(()=>{
    return <div>
        <div>
            <div style={{margin:"auto"}}>  <Heading>Sorry Book not available</Heading>
           <img style={{margin:"auto"}} src="https://i.pinimg.com/originals/56/32/c1/5632c13a0be038a4a219200e6dd2335d.jpg" alt="sad_image" /> 
           <div>Want to request a book?</div>
           <button class="button-28" role="button">Request a book</button>
           </div>
          
        </div>
    </div>
})