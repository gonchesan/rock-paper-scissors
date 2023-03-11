import React, { useEffect } from "react";

import ReactPortal from "./ReactPortal";
import { ModalProps } from "@/models/Modals";

import Button from "@/components/Button";
import { ReactComponent as Cross } from "@/assets/icons/cross.svg";
import "./styles.scss";

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleClose,
  canClose,
}) => {
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
            <Button onClick={handleClose} className="close-btn">
              <Cross />
            </Button>
          ) : null}

          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
