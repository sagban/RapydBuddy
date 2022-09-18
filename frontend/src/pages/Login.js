import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import './Login.css'
import { initialise } from "../utils/util";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';

const Login = () => {
    const [email , setEmail ] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

  useEffect(()=> {
    initialise()
    if(checkLoggedIn()){
        navigate("/")
    }
  }, [])
    function handleLogin(e) {
        e.preventDefault()
        console.log("clickeds")
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        
 }
  return (
    <>
      <Header></Header>
      <main className="w-75">
        <br /><br />
        <center>
        <h3>Log In </h3>
        </center>
        
        <form>
            <div className="center">
            <label>
            Email <br />
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
            </label>
            <br />
            <label>
            Password <br />
            <input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </label>
            <br /><br /><br />
            <center>
            <button className="button1" onClick={e => handleLogin(e)}>Log In</button>
            </center>
            
            </div>

            
           
        </form>
      </main>
    </>
  );
};

export default Login
