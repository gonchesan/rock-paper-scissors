import Modal from "../Modal";
import { RulesProps } from "@/models/Rules";
import { DescriptionOptions } from "@/models/DescriptionOptions";

import RulesFive from "@/assets/images/rules-5.png";
import RulesThree from "@/assets/images/rules-3.png";

import "./styles.scss";

const RulesModal: React.FC<RulesProps> = ({ setModals, modals, mode }) => {
  const description: DescriptionOptions = {
    text: {
      classic: [
        "Scissors cut paper",
        "Paper covers rock",
        "Rock breaks scissors",
      ],
      experimental: [
        "Scissors cut paper",
        "Paper covers rock",
        "Rock crushes lizard",
        "Lizard poisons Spock",
        "Spock smashes (or melts) scissors",
        "Scissors decapitate lizard",
        "Lizard eats paper",
        "Paper disproves Spock",
        "Spock vaporizes rock",
        "Rock breaks scissors",
      ],
    },
    image: {
      classic: RulesThree,
      experimental: RulesFive,
    },
  };

  return (
    <Modal
      handleClose={() => setModals({ ...modals, rules: false })}
      isOpen={modals.rules}
      canClose={true}
    >
      <>
        <div className="modal__header">
          <p className="title">Rules</p>
        </div>
        <div className="modal__body rules-modal">
          {mode ? (
            <>
              <img
                className="rules-modal__image"
                src={description.image[mode]}
                alt="rules instructions"
              />
              <div className="rules-modal__description">
                <ul className="rules-modal__list">
                  {description.text[mode].map((rule: string) => (
                    <li className="rules-modal__item" key={rule}>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </>
    </Modal>
  );
};

export default RulesModal;
