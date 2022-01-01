import {auth, provider, signInWithPopup}  from '../firebase';
import database from '../firebase';
import { SET_USER, GET_USER_POSTS } from './actionType';
import axios from 'axios';
import { async } from '@firebase/util';


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



export function signOutApi(){
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
}



export function getUserAuth(){
    return(dispatch)=> {
        auth.onAuthStateChanged(async (use) => {
            if(use)
                dispatch(setUser(use));
        });
    };
};


export  function updatePostlikes(count,likes,views,email,doc_id_a,doc_id_b){
    console.log("count", count ,"likes", likes, "views", views, "email", email, "doc_id_a", doc_id_a, "doc_id_b", doc_id_b);
    // axios.post("", likes ? {User:{useremail:email},UserPost:{likes:count, doc_id_a:doc_id_a, doc_id_b:doc_id_b}} : {User:{useremail:email},UserPost:{views:count, doc_id_a:doc_id_a, doc_id_b:doc_id_b}})
    // .then(res => {
    //      console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })
    
}



