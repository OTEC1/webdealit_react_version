import {auth, provider, signInWithPopup}  from '../firebase';
import database from '../firebase';
import { SET_USER, GET_USER_POSTS } from './actionType';


export const setUser = (payload) => ({
    type: SET_USER,
    user:payload,
});


export const getAllpost = (payload) => ({
    type: GET_USER_POSTS,
    payload:payload,
});



export function signInAPIGoogle(){
    return(dispatch) => {
        signInWithPopup(auth,provider)
        .then((paid) => {
            console.log(paid.user)
            dispatch(setUser(paid.user))
        })
        .catch((err) => alert(err.message))
    };
}





export function getUserAuth(){
    return(dispatch)=> {
        auth.onAuthStateChanged(async (use) => {
            if(use)
                dispatch(setUser(use));
            else
                alert("Credentials request failed ! ")
            

        });
    };
};