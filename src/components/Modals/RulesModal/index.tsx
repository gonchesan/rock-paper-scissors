import React, { FC } from "react";

import Modal from "../Modal";
import { RulesProps } from "@/models/RulesProps";

import RulesFive from "@/assets/images/rules-5.png";
import RulesThree from "@/assets/images/rules-3.png";

import "./styles.scss";
const RulesModal: FC<RulesProps> = ({ setModals, modals, mode }) => {
  return (
    <Modal
      handleClose={() => setModals({ ...modals, rules: false })}
      isOpen={modals.rules}
      canClose={true}
    >
      <>
        <div className="modal__header">
          <p>Rules</p>
        </div>
        <div className="modal__body rules">
          {mode !== "normal" ? (
            <>
              <img
                className="rules__image"
                src={RulesFive}
                alt="rules instructions"
              />
              <p className="rules__description">
                Scissors cuts paper, paper covers rock, rock crushes lizard,
                lizard poisons Spock, Spock smashes scissors, scissors
                decapitates lizard, lizard eats paper, paper disproves Spock,
                Spock vaporizes rock, and as it always has, rock crushes
                scissors.
              </p>
            </>
          ) : (
            <>
              <img
                className="rules__image"
                src={RulesThree}
                alt="rules instructions"
              />
              <p className="rules__description">
                Rock wins against scissors; paper wins against rock; and
                scissors wins against paper.
              </p>
            </>
          )}
        </div>
      </>
    </Modal>
  );
};

export default RulesModal;
