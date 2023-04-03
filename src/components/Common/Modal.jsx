import React from "react";
import ReactDOM from "react-dom";

const BackDrop = ({ onClose }) => {
  return <div className="modal-backdrop" onClick={onClose} />;
};

const ModalBox = ({ onClose, children }) => {
  return (
    <div className="modal" onClose={onClose}>
      {children}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <BackDrop onClose={onClose} />
      <ModalBox onClose={onClose}>{children}</ModalBox>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
