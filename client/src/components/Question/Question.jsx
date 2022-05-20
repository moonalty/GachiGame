import React, { useState } from 'react';
import OpenModal from "../OpenModal/OpenModal";


const Question = (el) => {
  const [modalActive, setModalActive] = useState(false);
console.log('hjbhjkj', el, el.cost)
  return (
    <div>
          <p onClick={() => setModalActive(true)} className="pshka">
            {el.el.cost}
          </p>
          <OpenModal
            el={el}
            active={modalActive}
            setActive={setModalActive}
          />
    </div>
  )
}

export default Question
