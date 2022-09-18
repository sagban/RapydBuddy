import { getAuth, onAuthStateChanged } from "firebase/auth";



export const checkLoggedIn = () => {


    const auth = getAuth();
    let ifLoggedIn = false;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        ifLoggedIn = true;
      } 
    });
    return ifLoggedIn;
}