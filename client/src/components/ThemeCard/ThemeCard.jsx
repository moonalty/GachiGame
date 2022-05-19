import React from "react";
import { Link } from "react-router-dom";
function ThemeCard({ theme }) {
  console.log("ELEMENT>>>>", theme);
  return (
    <div className="oneTheme">
      <Link to={`/gameForm/theme/quest/${theme.id}`}>{theme.name}</Link>
    </div>
  );
}

export default ThemeCard;
