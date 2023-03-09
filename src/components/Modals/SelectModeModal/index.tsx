import { FC } from "react";

import Modal from "../Modal";
import { SelectModeProps } from "@/models/SelectModeProps";

import SwordIcon from "@/assets/images/sword.png";
import "./styles.scss";
const SelectModeModal: FC<SelectModeProps> = ({
  setModals,
  modals,
  setMode,
}) => {
  return (
    <Modal
      handleClose={() => setModals({ ...modals, mode: false })}
      isOpen={modals.mode}
      canClose={false}
    >
      <div className="select-mode">
        <div className="modal__header">
          <p>Select mode</p>
        </div>
        <div className="modal__body">
          <div className="block-option" onClick={() => setMode("normal")}>
            <p className="block-option__caption">
              <img className="icon" src={SwordIcon} alt="sword icon" />
              <span className="number">3</span>
            </p>
            <p className="block-option__title">Normal mode</p>
          </div>
          <div className="block-option" onClick={() => setMode("hard")}>
            <p className="block-option__caption">
              <img className="icon" src={SwordIcon} alt="sword icon" />
              <span className="number">5</span>
            </p>
            <p className="block-option__title">Hard mode</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectModeModal;
