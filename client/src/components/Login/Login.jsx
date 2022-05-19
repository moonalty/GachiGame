import React from 'react';
import './Login.css'

function Login(props) {

  // const dispatch = useDispatch();

  const addUser = (e) => {

    e.preventDefault();

    const data = { name: e.target.name.value, email: e.target.email.value, password: e.target.password.value }

    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      // .then(data => dispatch(addStudentsAC(data)))
      .then(data => console.log(data))

    // dispatch({type:"ADD_STUDENT",payload:data})
  }


  return (
      <div className='login'>
        <form>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" minlength="8" className="form-control" id="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={addUser}>Sign in</button>
        </form>
      </div>
  );
}

export default Login;