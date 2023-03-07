import { ChoicesIcons } from "./model/Choices";
import { ResultOptions } from "./model/ResultOptions";
import RockIcon from "./assets/images/rock.png";
import PaperIcon from "./assets/images/paper.png";
import ScissorsIcon from "./assets/images/scissors.png";
import LizardIcon from "./assets/images/lizard.png";
import SpockIcon from "./assets/images/spock.png";

export const RESULTS: ResultOptions = {
  win: "PLAYER 1 WON",
  draw: "DRAW",
  lose: "CPU WON",
};

export const CHOICESICONSTRING: ChoicesIcons = {
  rock: RockIcon,
  paper: PaperIcon,
  scissors: ScissorsIcon,
  lizard: LizardIcon,
  spock: SpockIcon,
};
