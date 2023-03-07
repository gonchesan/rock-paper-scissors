import React, { useState, useEffect, FC } from "react";
import "../styles/Modal.scss";
import ReactPortal from "./ReactPortal";

export interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
  canClose: boolean;
}
const Modal: FC<ModalProps> = ({ children, isOpen, handleClose, canClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" && canClose ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="portal-root">
      <div className="modal">
        <div className="modal__content">
          {canClose ? (
            <button onClick={handleClose} className="close-btn">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">X</span>
            </button>
          ) : null}

          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;

{
  /* <p>Select mode</p>
<button onClick={() => setMode("normal")}>Normal</button>
<button onClick={() => setMode("hard")}>Hard</button> */
}
