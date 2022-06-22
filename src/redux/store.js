import { legacy_createStore } from "redux";
import { dataReducer } from "./reducer";








export const store=legacy_createStore(dataReducer)

console.log(store.getState());

store.subscribe(()=>{
    console.log('store is updated',store.getState());
})
