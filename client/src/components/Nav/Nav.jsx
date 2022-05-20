import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

function Nav() {
  const { user } = useSelector((state) => {
    console.log(state)
    return state
  })
  // console.log('как же я заебался',state);
  // const [state, setState] = useState(false)
  const userName = user?.user?.user?.name
  console.log('как же я заебался', user);
  return (
      <nav>
       <div className="nav-wrapper  brown lighten-2  " id='Nav'>
        <Link to='/home' className="brand-logo center black-text">Home</Link>
        <ul id="nav-mobile">
          {!userName ? <> <li><Link to='/registration'><h5 className="black-text">Registration</h5></Link></li>
          <li><Link to='/login'><h5 className="black-text">Login</h5></Link></li> 
          </> 
          :
          <><li><Link to='/logout'><h5 className="black-text">Logout</h5></Link></li>
          <li><Link to='/profile'><h5 className="black-text">Profile</h5></Link></li></>}
        </ul>
      </div>
    </nav>
    // <nav>
    //   <div className="nav-wrapper  brown lighten-2  " id='Nav'>
    //     <Link to='/home' className="brand-logo center black-text">Home</Link>
    //     <ul id="nav-mobile">
    //       <li><Link to='/registration'><h5 className="black-text">Registration</h5></Link></li>
    //       <li><Link to='/login'><h5 className="black-text">Login</h5></Link></li>
    //       <li><Link to='/logout'><h5 className="black-text">Logout</h5></Link></li>
    //       <li><Link to='/profile'><h5 className="black-text">Profile</h5></Link></li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Nav;
