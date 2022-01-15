import { combineReducers } from "redux";
import userReducer from './userReducer'
import promiseReducer from "./promiseReducer";
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    cartState: cartReducer,
    userState: userReducer,
    promiseState: promiseReducer,
   
});

export default rootReducer;