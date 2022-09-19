import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialise, db } from "./util";
import { doc, getDoc} from "firebase/firestore";



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

export  const  getWalletId = async () => {
    initialise();
    const docRef = doc(db, "users", userDetails().email);

    //get data from firebase
    const value = await getDoc(docRef)

    return value.data()['wallet']  
    
    
}
