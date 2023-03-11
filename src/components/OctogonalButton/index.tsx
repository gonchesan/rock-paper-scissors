import { CHOICESICONSTRING } from "@/constants";
import { OctogonalButtonProps } from "@/models/OctogonalButton";

import "./styles.scss";

const OctogonalButton: React.FC<OctogonalButtonProps> = ({
  optionName,
  selectOption,
}) => {
  return (
    <div className="button-action" onClick={() => selectOption(optionName)}>
      <div className={`button-action__edge--${optionName}`}>
        <img src={CHOICESICONSTRING[optionName]} alt={optionName} />
      </div>
    </div>
  );
};

export default OctogonalButton;
