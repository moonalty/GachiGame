import React from "react";
import QuestCard from "../QuestCard/QuestCard";

const OpenModal = ({ active, setActive, theme }) => {
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
