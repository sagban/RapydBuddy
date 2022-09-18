import React from "react";

const Header = () => {

  return (<div>
    <header class="navbar-fixed-top s-header js__header-sticky js__header-overlay">
      <nav class="s-header-v2__navbar" >
        <div class="container g-display-table--lg" style={{ padding: 0 }}>
          <div class="s-header-v2__navbar-row">
            <div class="s-header-v2__navbar-col">
              <button type="button" class="collapsed s-header-v2__toggle g-margin-r-10--xs" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                <span class="s-header-v2__toggle-icon-bar"></span>
              </button>
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
                  <li class="s-header-v2__nav-item"><a href="/jobs" class="s-header-v2__nav-link">Dashboard</a></li>
                  <li class="s-header-v2__nav-item"><a href="/spaces" class="s-header-v2__nav-link">Profile</a></li>
                  <li className="s-header-v2__nav-item"><a href="/team" class="s-header-v2__nav-link">Login</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header >

  </div>)
}

export default Header;


