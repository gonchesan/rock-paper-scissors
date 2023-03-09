import { FC } from "react";

import { BoardProps } from "@/models/BoardProps";
import { Choice } from "@/models/Choices";
import { CHOICESICONSTRING } from "@/constants";

import { ReactComponent as ReturnIcon } from "@/assets/icons/return.svg";

import "./styles.scss";

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
        <button onClick={() => restartGame(true)} className="button">
          <span className="edge"></span>
          <span className="front text">
            <ReturnIcon />
          </span>
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
