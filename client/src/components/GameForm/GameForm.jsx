import React, { useEffect } from "react";
import style from "./gameForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesRenderAC } from "../../redux/actionCreator/themeAC";

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
