import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
     <div className="nav-wrapper  brown lighten-2">
      <Link to='/home' className="brand-logo center black-text">Home</Link>
      <ul id="nav-mobile">
        <li><Link to='/registration'><h5 className="black-text">Registration</h5></Link></li>
        <li><Link to='/login'><h5 className="black-text">Login</h5></Link></li>
        <li><Link to='/logout'><h5 className="black-text">Logout</h5></Link></li>
        <li><Link to='/profile'><h5 className="black-text">Profile</h5></Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
