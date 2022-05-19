import React from "react";

const OpenModal = ({ modal, setModal, theme }) => {
  return (
    <div className={modal}>
      <div className="modal__content">{theme.name}</div>
    </div>
  );
};

export default OpenModal;
