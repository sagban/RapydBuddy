import  firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

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

//intialise firestore
export const db = getFirestore(initializeApp(firebaseConfig))


