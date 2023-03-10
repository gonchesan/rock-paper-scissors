import { ListOfChoices } from "./Choices";

export interface BoardProps {
  mode: string;
  choices: ListOfChoices;
  selectOption(index: string): void;
}
