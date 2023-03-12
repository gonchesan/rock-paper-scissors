import { ChoicesIcons, ListOfChoices } from "@/models/Choices";
import { ResultOptions } from "@/models/ResultOptions";

import RockIcon from "@/assets/images/rock.png";
import PaperIcon from "@/assets/images/paper.png";
import ScissorsIcon from "@/assets/images/scissors.png";
import LizardIcon from "@/assets/images/lizard.png";
import SpockIcon from "@/assets/images/spock.png";

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
export const CHOICESTOPLAY: ListOfChoices = [
  { name: "rock", loses: ["paper", "spock"] },
  { name: "paper", loses: ["scissors", "lizard"] },
  { name: "scissors", loses: ["rock", "spock"] },
  { name: "lizard", loses: ["rock", "scissors"] },
  { name: "spock", loses: ["paper", "lizard"] },
];
