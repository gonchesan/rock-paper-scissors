import React, { FC } from "react";
import { CHOICESICONSTRING } from "../constants";
import { BoardProps } from "../model/BoardProps";
import { Choice } from "../model/Choices";

import "../styles/Board.scss";

const Board: FC<BoardProps> = ({
  mode,
  choices,
  selectOption,
  openRulesModal,
  restartGame,
}) => {
  return (
    <div className="container">
      <div className="board">
        {mode === "normal"
          ? choices.slice(0, 3).map((option: Choice) => (
              <div
                className="button-action"
                onClick={() => selectOption(option.name)}
                key={option.name}
              >
                <div className="button-action__edge">
                  <img src={CHOICESICONSTRING[option.name]} alt={option.name} />
                </div>
              </div>
            ))
          : choices.map((option: Choice) => (
              <div
                className="button-action"
                onClick={() => selectOption(option.name)}
                key={option.name}
              >
                <div className={`button-action__edge--${option.name}`}>
                  <img src={CHOICESICONSTRING[option.name]} alt={option.name} />
                </div>
              </div>
            ))}
      </div>

      <div className="buttons-footer">
        <button onClick={restartGame} className="button--primary">
          <span className="edge"></span>
          <span className="front text">Z</span>
        </button>
        <button onClick={openRulesModal} className="button--secondary">
          <span className="edge"></span>
          <span className="front text">Rules</span>
        </button>
      </div>
    </div>
  );
};

export default Board;
