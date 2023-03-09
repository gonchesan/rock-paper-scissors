import React, { useEffect, FC } from "react";

import ReactPortal from "./ReactPortal";
import { ModalProps } from "@/models/ModalProps";

import { ReactComponent as Cross } from "@/assets/icons/cross.svg";
import "./styles.scss";

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
              <span className="front text">
                <Cross />
              </span>
            </button>
          ) : null}

          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
