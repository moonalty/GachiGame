import React from 'react';
import { Link } from "react-router-dom"
function ThemeCard({ el }) {
  console.log('ELEMENT>>>>', el);
  return (
    <div>
      <Link to={`/gameForm/theme/quest/${el.id}`}>{el.name}</Link>
    </div>
  );
}

export default ThemeCard;
