import React, { useState } from 'react';
import './Registration.css';
import { Link } from "react-router-dom"


function Registration(props) {

  // const dispatch = useDispatch();
  const [res, setRes] = useState('');

  const addUser = (e) => {

    e.preventDefault();

    const data = { name: e.target.name.value, email: e.target.email.value, password: e.target.password.value }

    fetch("/registration", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      // .then(data => dispatch(addStudentsAC(data)))
      .then(data => setRes(data.message))
    
    console.log(res)

    // dispatch({type:"ADD_STUDENT",payload:data})
  }


  return (
    <div className='login'>
      <form onSubmit={addUser}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" minLength="8" className="form-control" id="password" />
          </div>
        </div>
        { res==="Welcome!" ? <p>Welcome! Go to <Link to='/login'>login</Link></p> : <p>{ res }</p>}
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}

export default Registration;