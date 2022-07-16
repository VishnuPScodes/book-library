import { legacy_createStore } from "redux";


 import { combineReducers } from "redux";
import { dataReducer } from "./reducer";
import { authReducer } from "./redux2/reducer";


const rootReducer=combineReducers({
    data:dataReducer,
    auth:authReducer
})


export const store=legacy_createStore(rootReducer);

console.log(store.getState());

store.subscribe(()=>{
    console.log('store is updated',store.getState());
})
