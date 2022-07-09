import { authActions } from "./action"


const initState={
    loading:false,
    auth:false,
    errors:false
}

export const authReducer=((state=initState,action)=>{
    switch(action.type){
        case authActions.AUTH_ACTION_FAILURE:{
            return {
                loading:true,
                auth:false
            }
        }
        case authActions.AUTH_ACTION_SUCCESS :{
            return {
                loading:false,
                errors:true
            }
        }
        case authActions.AUTH_ACTION_REQUEST :{
            return {
                loading:false,
                auth:true
            }
        }
        default:
           return  state
    }

})


