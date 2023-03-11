import { ResultProps } from "@/models/Result";

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
  return (
    <Modal
      handleClose={() => setModals({ ...modals, result: false })}
      isOpen={modals.result}
      canClose={result !== "lose" ? true : false}
    >
      <div className="result-modal">
        <div className="modal__header">
          <p className="title">
            {result === "lose" ? "Game over" : "Standby Phase"}
          </p>
        </div>
        <div className="options-wrapper">
          <div className="option-picked--primary">
            <p className="option-picked__caption">Player 1</p>
            <img
              className="option-picked__image"
              src={CHOICESICONSTRING[picks.playerPick]}
            />
          </div>
          <div className="option-picked--secondary">
            <p className="option-picked__caption">Computer</p>
            <img
              className="option-picked__image"
              src={CHOICESICONSTRING[picks.computerPick]}
            />
          </div>
        </div>

        <Ribbon result={result} />
        {result === "win" || result === "draw" ? (
          <span
            className="modal__tooltip"
            onClick={() => setModals({ ...modals, result: false })}
          >
            Click here to keep playing
          </span>
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
