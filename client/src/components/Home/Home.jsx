import React from 'react';
import { Link } from "react-router-dom"
// import styles from './Home.module.css'
function Home(props) {
  return (
    <div className='home'>
      <Link to ='/gameForm' id='gamePoint' className="waves-effect waves-light btn-large">Cum</Link>
    </div>
  );
}

export default Home;
