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
    axios.post(process.env.REACT_APP_THUMBS_REACTION_CALL, likes !== 0 ? {User:{useremail:email},UserPost:{likes:count, doc_id_a:doc_id_a, doc_id_b:doc_id_b}} : {User:{useremail:email},UserPost:{likes:0,views:count, doc_id_a:doc_id_a, doc_id_b:doc_id_b}})
    .then(res => {
         console.log(res);
    }).catch(err => {
        console.log(err);
    })
    
}


export function  format(count){

    let m;

        if(count < 1000)
            m=count;
        else if(count >= 1)
            m="1k+"
        else if(count >= 2000)
              m="2k+"
        else if(count >= 3000)
              m="3k+"
       else if(count >= 4000)
              m="4k+"
       else if(count >= 5000)
              m="5k+"
       else if(count >= 6000)
              m="6k+"
       else if(count >= 7000)
              m="7k+"
       else if(count >= 8000)
              m="8k+"
       else if(count >= 9000)
              m="9k+"
       else if(count > 10000)
              m="🔥🔥"




    
    return m
}



