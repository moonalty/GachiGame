import React, { useEffect } from "react";
import style from "./gameForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesRenderAC } from "../../redux/actionCreator/themeAC";
import QuestCard from "../QuestCard/QuestCard";
// import { questRenderAC } from "../../redux/actionCreator/questAC";
import { Link } from "react-router-dom";

function GameForm() {
  const { themes } = useSelector((state) => state.themes);
  const { questions } = useSelector((state) => state.questions);
  const { score } = useSelector((state) => state.score);
  // console.log("themes>>>>", themes);
  // console.log("Questions>>>", questions);
  // console.log('questions!!!!>>>',questions);
  // console.log('QQQQQQ>>>>>',questions);
  const dispatch = useDispatch((store) => store.themes);
  // const dispatch = useDispatch((store) => store.questions);
  // const { state, setState } = useState(false)

  useEffect(() => {
    fetch("/gameForm")
      .then((res) => res.json())
      .then((data) => dispatch(themesRenderAC(data)));

    // fetch("/")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(questRenderAC(data)));
  }, []);

  return (
    <>
    <div>SCORE: {score}</div>
    <div className="box">
      <div>
        {themes.map((theme) => (
          <div className="mainBox">
            <ThemeCard key={theme.id} theme={theme} id={theme.id} />
            <QuestCard idT={theme.id} question={questions} />
          </div>
        ))}
      </div>
      {/* <div className="tdshka">
        {questions.map((question) => (
          <QuestCard
          key={question.id}
          question={question}
          idQ={question.id}
          idT={theme.id}
          />
          ))}
        </div> */}
    </div>
        </>
  );
}

export default GameForm;
