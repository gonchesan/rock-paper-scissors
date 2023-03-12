import { motion } from "framer-motion";

import { CHOICESICONSTRING } from "@/utils/constants";

import { OctogonalButtonProps } from "@/models/OctogonalButton";

import "./styles.scss";

const OctogonalButton: React.FC<OctogonalButtonProps> = ({
  optionName,
  selectOption,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 5 }}
      className="button-action"
      onClick={() => selectOption(optionName)}
    >
      <div className={`button-action__edge--${optionName}`}>
        <img
          loading="lazy"
          src={CHOICESICONSTRING[optionName]}
          alt={optionName}
        />
      </div>
    </motion.div>
  );
};

export default OctogonalButton;
