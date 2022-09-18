import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h4>Rapyd Buddy</h4>
        </div>
        <div className="links">
            <NavLink end activeClassName="active" to="/">Home</NavLink>
            <NavLink end activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink end activeClassName="active" to="/profile">Profile</NavLink>
            <NavLink end activeClassName="active" to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default Header