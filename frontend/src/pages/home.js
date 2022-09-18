import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import '../styles/Home.css'
import { Navigate, useNavigate } from "react-router-dom";
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialise } from '../utils/util';
const Home = () => {
  const [user , setUser ] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    if(checkLoggedIn()){
        console.log(userDetails())
        setUser(userDetails())
        navigate("/")
    }else{
        navigate('/welcome')
    }
  }, [])


  return  (
    <>
    <Header></Header>
    <div className='bookcardiv'>
<div className='header'>
<h3>available rides</h3>
<div className='extras'>
  <p>sort/</p>
  <p>filter</p>
</div>

</div>
    <div className='ridesparent'>
     
    
    <div className='availableride'>
 <div >
  <p className='name'>Sara's ride</p>
  <p className='places'>From: xyz</p>
  <p className='places'>To: abz</p>
<p className='people'>4 people riding</p>

<div style={{"display": "flex"}}>
<button style={{"width": "7rem", "font-size": "0.8rem", "height": "1.5rem", "fontWeight": "500"}}>ride this cab</button>
<p style={{"fontSize": "0.8rem", "marginLeft": "1rem", "opacity": 0.7}}>Total ride estimate: INR 200</p>
</div>


 </div>


 </div>




 </div>
 <button onClick={e => navigate('/book')}>Create a New Ride</button>
    </div>
    
 
    </>
    
  )
}

export default Home