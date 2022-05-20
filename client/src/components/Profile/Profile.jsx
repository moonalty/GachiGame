import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAC } from '../../redux/actionCreator/profileAC';


function Profile() {
console.log('here');
  const score = 0
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)
  console.log('USER!!!!!', user);
  useEffect(() => {
    console.log('PROF')
    fetch("/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({type:'PROFILE', payload:data})});
  }, []);

  return (
    <div>
      <ul>    
        <li>
          UserEmail: {user?.user?.user?.email}
        </li>
        <li>
          UserName: {user?.user?.user?.name}
        </li>
        <li>
          Score: {score}
        </li>

      </ul>

    </div>
  );
}

export default Profile;
