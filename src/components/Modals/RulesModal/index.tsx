import { motion, Variants } from "framer-motion";

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

  const motionList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const motionItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
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
              <motion.img
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rules-modal__image"
                src={description.image[mode]}
                alt="rules instructions"
              />
              <div className="rules-modal__description">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={motionList}
                  className="rules-modal__list"
                >
                  {description.text[mode].map((rule: string) => (
                    <motion.li
                      variants={motionItem}
                      className="rules-modal__item"
                      key={rule}
                    >
                      {rule}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </>
          ) : null}
        </div>
      </>
    </Modal>
  );
};

export default RulesModal;
