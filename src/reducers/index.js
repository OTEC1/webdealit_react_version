import { combineReducers } from "redux";
import userReducer from './userReducer'
import promiseReducer from "./promiseReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    promiseState: promiseReducer,
});

export default rootReducer;