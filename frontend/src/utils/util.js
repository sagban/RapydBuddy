import  firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"
import {Redirect, useHistory} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



console.log(process.env.REACT_APP_API_KEY)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
  };




// Initialize Firebase
export const initialise = () => {
    firebase.initializeApp(firebaseConfig);
}




// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
   
//     auth.signInWithPopup(googleProvider).then((res) => {
//         // history.push('/products')
//         console.log(res.user)
//     }).catch((error)=> {
//         console.log(error.message)
//     })
// }