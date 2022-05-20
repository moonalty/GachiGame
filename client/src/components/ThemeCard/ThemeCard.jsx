import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import OpenModal from "../OpenModal/OpenModal";
function ThemeCard({ theme }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="oneTheme">
        <p onClick={() => setModalActive(true)}>{theme.name}</p>
      </div>
      <OpenModal
        theme={theme}
        active={modalActive}
        setActive={setModalActive}
      />
    </>
  );
}

export default ThemeCard;

{
  /* <Link to={`/gameForm/theme/quest/${theme.id}`}>{theme.name}</Link> */
}
