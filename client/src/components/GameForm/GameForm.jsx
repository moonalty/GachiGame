import React, { useEffect } from "react";
import style from "./gameForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesRenderAC } from "../../redux/actionCreator/themeAC";
import {Link} from "react-router-dom";

function GameForm() {
  const { themes } = useSelector((state) => state.themes);
  console.log("themes>>>>", themes);
  const dispatch = useDispatch((store) => store.themes);
  // const { state, setState } = useState(false)

  useEffect(() => {
    fetch("/gameForm")
      .then((res) => res.json())
      .then((data) => dispatch(themesRenderAC(data)));
  }, []);

  return (

    // <div>
    //   <table className={style.table}>
    //     <tbody>
    //       <tr>
    //         <th scope="row">Сказки</th>
    //         <td><Link style='line-through' to="/game/1"> 200 </Link></td>
    //         <td><Link style='line-through' to="/game/2"> 400 </Link></td>
    //         <td><Link style='line-through' to="/game/3">600</Link></td>
    //         <td><Link style='line-through' to="/game/4"> 800 </Link></td>
    //         <td><Link style='line-through' to="/game/5"> 1000</Link></td>
    //       </tr>
    //       <tr>
    //         <th scope="row">Страны</th>
    //         <td><Link style='line-through' to="/game/6"> 200 </Link></td>
    //         <td><Link style='line-through' to="/game/7"> 400 </Link></td>
    //         <td><Link style='line-through' to="/game/8">600</Link></td>
    //         <td><Link style='line-through' to="/game/9"> 800 </Link></td>
    //         <td><Link style='line-through' to="/game/10"> 1000</Link></td>
    //       </tr>
    //       <tr>
    //         <th scope="row">Моря</th>
    //         <td><Link style='line-through' to="/game/11"> 200 </Link></td>
    //         <td><Link style='line-through' to="/game/12"> 400 </Link></td>
    //         <td><Link style='line-through' to="/game/13">600</Link></td>
    //         <td><Link style='line-through' to="/game/14"> 800 </Link></td>
    //         <td><Link style='line-through' to="/game/15"> 1000</Link></td>
    //       </tr>
    //     </tbody>
    //   </table>

    // </div>


    <div>
      <table className={style.table}>
        {themes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </table>
    </div>
  );
}

export default GameForm;
