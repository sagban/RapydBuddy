import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialise } from "./util";



export const checkLoggedIn = () => {

    initialise()
    const auth = getAuth();
    
    // return true
    if(auth.currentUser){
        return true
    }else {
        return false
    }
    
}


export const userDetails = () => {
    initialise()
    const auth = getAuth();
    
    return auth.currentUser;
}
