import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Admin } from "./Admin";




export const PrivateRoute=(({children})=>{
    const {auth}=useSelector(state=>state.auth.auth);
    console.log('visitedt the private route page ',auth)
    const navigate=useNavigate()
    if(auth==false){
        navigate('/AdminLogin')
    }else{
        return children
    }
    
   
})