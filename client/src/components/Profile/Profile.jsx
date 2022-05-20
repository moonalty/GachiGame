import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAC } from '../../redux/actionCreator/profileAC';


function Profile() {
const dispatch = useDispatch()
const {user} = useSelector((state) => state.user)
console.log('USER!!!!!',user);
  useEffect(() => {
    fetch("/login")
      .then((res) => res.json())
      .then((data) => dispatch(profileAC(data)));
  }, []);

  return (
    <div>
      <ul>
      <li>
      {user[0].name}
      </li>
      </ul>
      
    </div>
  );
}

export default Profile;
