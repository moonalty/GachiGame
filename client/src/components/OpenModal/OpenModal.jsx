import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { costsRenderAC } from "../../redux/actionCreator/costsAC";
import QuestCard from "../QuestCard/QuestCard";

const OpenModal = ({ active, setActive, theme, question, idQ, el, name }) => {
  const answer = (e) => {
    e.preventDefault();
    const otvet = e.target.modalInput.value;
    console.log("OTVET", otvet);
    console.log("thisELE>>>>>", el);
    if (toString(otvet.toLowerCase()) === toString(el.answer.toLowerCase())) {
      alert("OK!!!!");
    } else {
      alert("NO!!!");
    }

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    </div>
  );
};

export default OpenModal;
