import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { costsRenderAC } from "../../redux/actionCreator/costsAC";
import QuestCard from "../QuestCard/QuestCard";

const OpenModal = ({ active, setActive, theme }) => {
  // const dispatch = useDispatch((store) => store.costs)
  // const { costs } = useSelector((state) => state.costs);

  // useEffect(() => {
  //   fetch('gameForm/themes/costs/:id')
  //   .then((res)=> res.json())
  //   .then((data)=> console.log(data))
  //   .then((data) => dispatch(costsRenderAC(data)))
  // })
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <QuestCard />
      </div>
    </div>
  );
};

export default OpenModal;
