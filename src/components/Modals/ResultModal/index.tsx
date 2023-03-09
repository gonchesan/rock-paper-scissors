import React, { FC } from "react";

import { ResultProps } from "@/models/ResultProps";
import Modal from "../Modal";

import { CHOICESICONSTRING, RESULTS } from "@/constants";

import "./styles.scss";
const ResultModal: FC<ResultProps> = ({
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
          <p>{result === "lose" ? "Game over" : "Standby Phase"}</p>
        </div>
        <div className="options-wrapper">
          <div className="option-picked--primary">
            <p className="option-picked__banner">Player 1</p>
            <img
              className="option-picked__choice"
              src={CHOICESICONSTRING[picks.playerPick]}
            />
          </div>
          <div className="option-picked--secondary">
            <p className="option-picked__banner">Computer</p>
            <img
              className="option-picked__choice"
              src={CHOICESICONSTRING[picks.computerPick]}
            />
          </div>
        </div>
        <div className={`ribbon${result === "win" ? "--won" : ""}`}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <span className="ribbon-top"></span>
          <p> {RESULTS[result]}</p>
        </div>
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
            <div onClick={() => restartGame(false)} className="button-wrapper">
              <button className="button--secondary">
                <span className="edge"></span>
                <span className="front text">Play Again</span>
              </button>
              <button
                onClick={() => restartGame(true)}
                className="button--primary"
              >
                <span className="edge"></span>
                <span className="front text">Select Mode</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default ResultModal;
