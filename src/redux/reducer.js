import { dataActions } from "./action"



const initState={
    loading:false,
    error:true,
    booksearch:false,
    nightmode:false,
    ws:[]
}

export const dataReducer=((state=initState,action)=>{
    switch(action.type){
        case dataActions.DATA_ADD_FAILURE :{
            return {
               ...state,
               loading:false,
               error:true
            }
        }
        case dataActions.DATA_ADD_REQUEST:{
            return {
               ...state,
               loading:true,
               error:false
            }
        }
        case dataActions.DATA_ADD_SUCCESS :{
            return {
               ...state,
               loading:false,
               error:false
            }
        }


        case dataActions.BOOK_SEARCH_FAILURE :{
            return {
               ...state,
               booksearch:false,
               error:true
            }
        }
        case dataActions.BOOK_SEARCH_REQUEST:{
            return {
               ...state,
               booksearch:true,
               error:false
            }
        }
        case dataActions.BOOK_SEARCH_SUCCESS :{
            return {
               ...state,
               booksearch:false,
               error:false
            }
        }
        

        case dataActions.WS_ADD_FAILURE :{
            return {
               ...state,
               
               error:true
            }
        }
        case dataActions.WS_ADD_REQUEST:{
            return {
               ...state,
               
               error:false
              
            }
        }
        case dataActions.WS_ADD_SUCCESS :{
            return {
               ...state,
               ws:[...state.ws,action.payload],
               error:false
            }
        }

        case dataActions.NIGHT_MODE_ON:{
            return {
               ...state,
               nightmode:true,
               error:false
            }
        }
        case dataActions.LIGHT_MODE_ON :{
            return {
               ...state,
               nightmode:false,
               error:false
            }
        }
        default :
        return state
    }
})