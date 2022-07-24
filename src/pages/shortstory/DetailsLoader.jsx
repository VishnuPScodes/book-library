
import "../Romance/romance.css"
import { Audio ,BallTriangle} from  'react-loader-spinner'
import { Stack } from "@chakra-ui/react"
// import { BookLoader } from "react-awesome-loaders";


// export const DetailsLoader=(()=>{
//     return <div>
//         <div id="detailsLoader">
//             <img src="https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif" alt="" />
//         </div>
//     </div>
// })


export const DetailsLoader=(()=>{
    return <Stack  marginLeft={{lg:"46%",sm:"45%",base:"40%"}} marginTop={{lg:"16%" ,base:"20%"}}>
        <BallTriangle id='loader'
    height="100"
    width="100"
    color='red'
    margin='auto'
    ariaLabel='loading'
  />
    </Stack>
})


// export const DetailsLoader = () => {
//   return (
//     <>
//       <BookLoader
//         background={"linear-gradient(135deg, #6066FA, #4645F6)"}
//         desktopSize={"100px"}
//         mobileSize={"80px"}
//         textColor={"#4645F6"}
//       />
//     </>
//   );
// };