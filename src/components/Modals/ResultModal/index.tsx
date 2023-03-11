import { ResultProps } from "@/models/Result";
import { motion } from "framer-motion";
import Modal from "../Modal";
import Button from "@/components/Button";
import Ribbon from "@/components/Ribbon";

import { CHOICESICONSTRING } from "@/constants";

import "./styles.scss";
const ResultModal: React.FC<ResultProps> = ({
  setModals,
  modals,
  result,
  restartGame,
  picks,
}) => {
  const motionContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  const motionItem2 = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  function clickAnywhere() {
    if (result === "win" || result === "draw")
      setModals({ ...modals, result: false });
  }

  return (
    <Modal
      handleClose={() => setModals({ ...modals, result: false })}
      isOpen={modals.result}
      canClose={result !== "lose" ? true : false}
    >
      <div className="result-modal" onClick={clickAnywhere}>
        <div className="modal__header">
          <p className="title">
            {result === "lose" ? "Game over" : "Standby Phase"}
          </p>
        </div>

        <motion.div
          variants={motionContainer}
          initial="hidden"
          animate="show"
          className="options-wrapper"
        >
          <motion.div variants={motionItem} className="option-picked--primary">
            <p className="option-picked__caption">Player 1</p>
            <img
              className="option-picked__image"
              src={CHOICESICONSTRING[picks.playerPick]}
            />
          </motion.div>
          <motion.div
            variants={motionItem2}
            className="option-picked--secondary"
          >
            <p className="option-picked__caption">Computer</p>
            <img
              className="option-picked__image"
              src={CHOICESICONSTRING[picks.computerPick]}
            />
          </motion.div>
        </motion.div>

        <Ribbon result={result} />
        {result === "win" || result === "draw" ? (
          <span className="modal__tooltip">Click anywher to keep playing</span>
        ) : null}
        {result === "lose" ? (
          <>
            <div className="button-wrapper">
              <Button className="secondary" onClick={() => restartGame(false)}>
                Play Again
              </Button>
              <Button className="primary" onClick={() => restartGame(true)}>
                Select Mode
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default ResultModal;
