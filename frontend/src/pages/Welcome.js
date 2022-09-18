import React from 'react'
import '../styles/Welcome.css'
import logo from '../images/logo.png'

const Welcome = () => {
    return  (
      <>

         <div className='welcomebody'>
            <img className='img1' src={logo} alt="" />
            <div>
                <button>login as organisation</button>
                <br /><br />
                <button style={{"backgroundColor": "white"}}>login as employee</button>
            </div>
         </div>

      </>
      
    )
  }
  
  export default Welcome