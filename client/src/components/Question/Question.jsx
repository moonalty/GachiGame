import React, { useState } from "react";
import OpenModal from "../OpenModal/OpenModal";

const Question = (el) => {
  const [modalActive, setModalActive] = useState(false);
  const [stateA, setStateA] = useState("on");
  const lock = () => {
    setStateA("off");
  };
  console.log("hjbhjkj", el, el.cost);
  return (
    <div className="newTbox">
      <p className="on" onClick={() => setModalActive(true)}>
        {el.el.cost}
      </p>
      <OpenModal
        el={el}
        active={modalActive}
        setActive={setModalActive}
        setStateA={setStateA}
        stateA={stateA}
        lock={lock}
      />
    </div>
  );
};

export default Question;
