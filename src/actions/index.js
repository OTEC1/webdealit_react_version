import {auth, provider, signInWithPopup}  from '../firebase';
import database from '../firebase';
import { SET_USER, GET_USER_POSTS ,SET_PROMISE} from './actionType';
import axios from 'axios';
import { async } from '@firebase/util';
import swal from 'sweetalert2'




export const setUser = (payload) => ({
    type: SET_USER,
    user:payload,
});


export const setPromise = (payload) => ({
    type: SET_PROMISE,
    promise:payload,
});


export const getAllpost = (payload) => ({
    type: GET_USER_POSTS,
    payload:payload,
});



export function signInAPIGoogle(){
    return(dispatch) => {
        signInWithPopup(auth,provider)
        .then((paid) => {
            dispatch(setUser(paid.user))
        })
        .catch((err) => alert(err.message))
    };
}



export function signOutGoogleApi(){
    console.log("Google");
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
}



export function signOutCustomApi() {
    console.log("Custom");
    return (dispatch) => {
        dispatch(setUser(null));
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


var CryptoJS = require("crypto-js");
export function CustomSignIn(){
    return (dispatch)  => {    
      if(document.querySelector('#email').value.length <= 0 )
         swal.fire({text:"Pls fill out all fields ", icon:'warning'})
        else if (document.querySelector('#password').value.length <= 0)
        swal.fire({text:"Pls fill out all fields ", icon:'warning'})
         else{ 
             dispatch(setPromise(true));
            axios.post("https://us-central1-grelots-ad690.cloudfunctions.net/webdealitSignInUser",{User:{email:document.querySelector('#email').value,password:CryptoJS.AES.encrypt(document.querySelector('#password').value, process.env.REACT_APP_KEYS).toString()}})
                .then(res => {
                    

                    if(res.data.message  === "Email or password combination not correct !"){
                       swal.fire({text:res.data.message, icon:'error'});
                       dispatch(setPromise(false));
                    }
                    else
                        if(res.data.message  === "Account not found !"){
                            swal.fire({text:"Account not found ! ", icon:'error'});
                            dispatch(setPromise(false));
                        }
                     
                       if(res.data.message.toString()  != "Account not found !" && res.data.message.toString()  != "Email or password combination not correct !"){
                                dispatch(setUser(res.data.message));
                                dispatch(setPromise(false));
                        }
                     
                            
                         
                        }).catch(err => {
                        alert("Error occurred "+ err);
                        dispatch(setPromise(false));
                    }); 
        }  
    }; 

}







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
        else if(count >= 1000 && count < 1999)
                m="1k+"
        else if(count >= 2000 && count < 2999)
               m="2k+"
        else if(count >= 3000 && count < 3999)
               m="3k+"
        else if(count >= 4000 && count < 4999)
              m="4k+"
       else if(count >= 5000 && count < 5999)
              m="5k+"
       else if(count >= 6000 && count < 6999)
              m="6k+"
       else if(count >= 7000 && count < 7999)
              m="7k+"
       else if(count >= 8000 && count < 8999)
              m="8k+"
       else if(count >= 9000 && count < 9999)
              m="9k+"
       else if(count > 10000)
              m="🔥🔥"




    
    return m
}



