import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { costsRenderAC } from "../../redux/actionCreator/costsAC";
import QuestCard from "../QuestCard/QuestCard";

const OpenModal = ({ active, setActive, theme, question, idQ, el, name }) => {
  const answer = (e) => {
    e.preventDefault();
    const otvet = e.target.modalInput.value;
    console.log("OTVET", otvet);
    console.log('ETO VAJNO>>>>>>>>>', otvet.toLowerCase());
    console.log("thisELE>>>>>", el);
    if (otvet.toLowerCase() === el.el.answer.toLowerCase()) {
      alert("OK!!!!");
    } else {
      alert("NO!!!");
    }

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <form
        onSubmit={answer}
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {el.el.name}
        <input className="inputik" type="text" name="modalInput" />
        <button type="submit" className="knopka1">
          Ответить
        </button>
      </form>
    </div>
  );
};

export default OpenModal;
