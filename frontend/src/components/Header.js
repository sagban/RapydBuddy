import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useNavigate } from 'react-router-dom';
import { checkLoggedIn, userDetails } from '../utils/checkLoggedIn';

const Header = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (checkLoggedIn()) {
      console.log(userDetails())
      setUser(userDetails())
    } else {
      // navigate('/welcome')
    }
  }, [])

  return (
    <div>
      <header class="navbar-fixed-top s-header js__header-sticky js__header-overlay">
        <nav class="s-header-v2__navbar" >
          <div class="container g-display-table--lg" style={{ padding: 0 }}>
            <div class="s-header-v2__navbar-row">
              <div class="s-header-v2__navbar-col">
                <a class="collapsed s-header-v2__toggle g-margin-r-10--xs" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                  <span class="s-header-v2__toggle-icon-bar"></span>
                </a>
              </div>

              <div class="s-header-v2__navbar-col s-header-v2__navbar-col-width--130">
                <div class="s-header-v2__logo">
                  <a href="/" class="s-header-v2__logo-link">
                    <img class="s-header-v2__logo-img s-header-v2__logo-img--default" src="/logo.png" alt="logo" height="36" />
                    <img class="s-header-v2__logo-img s-header-v2__logo-img--shrink" src="/logo.png" alt="logo" height="36" />
                  </a>
                </div>
              </div>
              <div class="s-header-v2__navbar-col s-header-v2__navbar-col--right" style={{ marginRight: 0 }}>
                <div class="collapse navbar-collapse s-header-v2__navbar-collapse" id="nav-collapse">
                  <ul class="s-header-v2__nav">
                    <li class="s-header-v2__nav-item"><NavLink to="/dashboard" class="s-header-v2__nav-link">Dashboard</NavLink></li>
                    <li class="s-header-v2__nav-item"><NavLink to="/profile" class="s-header-v2__nav-link">Profile</NavLink></li>
                    <li class="s-header-v2__nav-item"><NavLink to="/home" class="s-header-v2__nav-link">Rides</NavLink></li>
                    <li className="s-header-v2__nav-item"><NavLink to="/login" class="s-header-v2__nav-link">{user ? <span>{user.email}</span> : <span>Login</span>}</NavLink></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header >


    </div>
  )
}

export default Header;


