import { motion } from "framer-motion";
import Modal from "../Modal";
import { SelectModeProps } from "@/models/SelectMode";

import SwordIcon from "@/assets/images/sword.png";
import "./styles.scss";
const SelectModeModal: React.FC<SelectModeProps> = ({
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="select-mode-modal"
      >
        <div className="modal__header">
          <p className="title">Select mode</p>
        </div>
        <div className="modal__body">
          <div
            className="block-option classic"
            onClick={() => setMode("classic")}
          >
            <p className="block-option__caption">
              <img
                loading="lazy"
                className="icon"
                src={SwordIcon}
                alt="sword icon"
              />
              <span className="number">3</span>
            </p>
            <p className="block-option__title">Classic mode</p>
          </div>
          <div
            className="block-option experimental"
            onClick={() => setMode("experimental")}
          >
            <p className="block-option__caption">
              <img
                loading="lazy"
                className="icon"
                src={SwordIcon}
                alt="sword icon"
              />
              <span className="number">5</span>
            </p>
            <p className="block-option__title">Experimental mode</p>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default SelectModeModal;
