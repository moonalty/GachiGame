import React from 'react';
import { Link } from "react-router-dom"
import style from './gameForm.module.css'
import {useState} from 'react'

function GameForm() {
  const {state, setState} = useState(false)
  return (

<div>
        <table className={style.table}>
        <tbody>
        <tr>
          <th scope="row"><Link to></Link>Gachi questions under 300$</th>
            {/* <td><Link></Link>100</td>
            <td><Link></Link>200</td>
            <td><Link></Link>300</td>
            <td><Link></Link>400</td> */}
        </tr>
        <tr>
          <th scope="row">Elbrus</th>

        </tr>
        <tr>
          <th scope="row">Somethink</th>
   
        </tr>
        </tbody>
      </table> 
</div>
 
  );
}

export default GameForm;
