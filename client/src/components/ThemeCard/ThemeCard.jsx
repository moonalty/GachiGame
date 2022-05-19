import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
function ThemeCard({ theme }) {
  return (
    <div className="oneTheme">
      <Modal theme={theme} />
    </div>
  );
}

export default ThemeCard;

{
  /* <Link to={`/gameForm/theme/quest/${theme.id}`}>{theme.name}</Link> */
}
