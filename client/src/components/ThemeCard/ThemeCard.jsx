import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import OpenModal from "../OpenModal/OpenModal";
import { useSelector } from "react-redux";
function ThemeCard({ theme, id }) {
  const [modalActive, setModalActive] = useState(false);
  const { questions } = useSelector((state) => state.questions);
  return (
    <div className="qBox">
      <div className="oneTheme">
        <div className="textBox" onClick={() => setModalActive(true)}>{theme.name}</div>
      </div>
      {/* <OpenModal
        idQ={questions}
        id={id}
        active={modalActive}
        setActive={setModalActive}
      /> */}
    </div>
  );
}

export default ThemeCard;

{
  /* <Link to={`/gameForm/theme/quest/${theme.id}`}>{theme.name}</Link> */
}
