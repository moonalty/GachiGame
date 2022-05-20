import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login(props) {

  const navigation = useNavigate()
  const [res, setRes] = useState('');

  // const dispatch = useDispatch();

  const addUser = (e) => {
    
    e.preventDefault();

    const data = { name: e.target.name.value, email: e.target.email.value, password: e.target.password.value }

    fetch("/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      
      // .then(data => dispatch(addStudentsAC(data)))
      .then(data => data.message==='Welcome'?navigation('/'):navigation('/registration'))
   
  
    // dispatch({type:"ADD_STUDENT",payload:data})
  }

  // const knopka = () => { 
  //   if (res === "Welcome") { return navigation('/')}
  // }

  return (
      <div className='login'>
      <form onSubmit={addUser}>
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
        {res !== "Welcome" && <p>{res}</p> }
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
  );
}

export default Login;
