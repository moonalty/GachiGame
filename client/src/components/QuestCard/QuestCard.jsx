import React, { useState } from "react";
import { useSelector } from "react-redux";
import OpenModal from "../OpenModal/OpenModal";
import Question from "../Question/Question";

function QuestCard({ question, idQ, idT }) {
  console.log("Q>>>>>>>>>>>", question);
  // const { questions } = useSelector((state) => state.questions);
  // console.log('Q2>>>>', questions);
  const [modalActive, setModalActive] = useState(false);
  // const { questions } = useSelector((state) => state.questions);

  const rightQ = question.filter((el) => el.theme_id === idT);
  console.log(rightQ);
  return (
    <div className="tBox">
      {/* <p onClick={() => setModalActive(true)}>{question.cost}</p> */}
      {/* <OpenModal
    idQ={question}
    id={id}
    active={modalActive}
    setActive={setModalActive}
  /> */}
      {rightQ.map((el) => (
        <Question el={el}/>
        // <>
        //   <p onClick={() => setModalActive(true)} className="pshka">
        //     {el.cost}
        //   </p>
        //   <OpenModal
        //     el={el}
        //     active={modalActive}
        //     setActive={setModalActive}
        //   />
        // </>
      ))}
    </div>
  );
}

export default QuestCard;
