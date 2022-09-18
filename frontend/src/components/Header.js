import React, {useState, useEffect} from 'react';
import {NavLink, useHistory, useNavigate} from 'react-router-dom';
import './Header.css'
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';

const Header = () => {

    const navigate = useNavigate()
    const [user , setUser ] = useState(null)

    useEffect(()=> {
      if(checkLoggedIn()){
          console.log(userDetails())
          setUser(userDetails())
      }else{
          navigate('/welcome')
      }
    }, [])
    
  return (
    <div className='navbar'>
        <div className="logo">
            <h4>Rapyd Buddy</h4>
        </div>
        <div className="links">
            <NavLink end activeClassName="active" to="/">Home</NavLink>
            <NavLink end activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink end activeClassName="active" to="/profile">Profile</NavLink>
            {user? <span activeClassName="inactive">{user.email}</span> : <NavLink end activeClassName="active" to="/login">Login</NavLink>}
            
        </div>
    </div>
  )
}

export default Header