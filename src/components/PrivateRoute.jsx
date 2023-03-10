import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Admin } from "./Admin";




export const PrivateRoute=(({children})=>{
    const {auth}=useSelector(state=>state.auth.auth);
    const {night}=useSelector(state=>state.data.nightmode)
    console.log('visitedt the private route page ',auth)
    console.log(night,'night')
    const navigate=useNavigate()
    if(night==false){
        navigate('/AdminLogin')
    }else{
        return children
    }
    
   
})