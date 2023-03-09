import { ChoicesIcons } from "@/models/Choices";

import { ReactComponent as RockIcon } from "@/assets/icons/rock.svg";
import { ReactComponent as PaperIcon } from "@/assets/icons/paper.svg";
import { ReactComponent as ScissorsIcon } from "@/assets/icons/scissors.svg";
import { ReactComponent as LizardIcon } from "@/assets/icons/lizard.svg";
import { ReactComponent as SpockIcon } from "@/assets/icons/spock.svg";
import "./styles.scss";

const Background = () => {
  const choicesIcon: ChoicesIcons = {
    rock: <RockIcon />,
    paper: <PaperIcon />,
    scissors: <ScissorsIcon />,
    lizard: <LizardIcon />,
    spock: <SpockIcon />,
  };
  return (
    <ul className="background-loader">
      <li>{choicesIcon["rock"]}</li>
      <li>{choicesIcon["paper"]}</li>
      <li>{choicesIcon["scissors"]}</li>
      <li>{choicesIcon["lizard"]}</li>
      <li>{choicesIcon["spock"]}</li>
      <li>{choicesIcon["rock"]}</li>
      <li>{choicesIcon["paper"]}</li>
      <li>{choicesIcon["scissors"]}</li>
      <li>{choicesIcon["lizard"]}</li>
      <li>{choicesIcon["spock"]}</li>
    </ul>
  );
};

export default Background;
