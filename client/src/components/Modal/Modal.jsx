import React, { useState } from "react";
import OpenModal from "../OpenModal/OpenModal";

const Modal = ({ theme }) => {
  const [modal, setModal] = useState("closeModal");
  const showModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div onClick={() => setModal("openModal")} id={theme.id}>
      {theme.name}---{theme.id}
      <OpenModal theme={theme} modal={modal} setModal={showModal} />
    </div>
  );
};

export default Modal;
