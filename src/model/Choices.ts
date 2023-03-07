export interface Choice {
  name: string;
  losesTo: string[];
}
export type ListOfChoices = Choice[];
export interface ChoicesIcons {
  [key: string]: any;
  rock: JSX.Element | string;
  paper: JSX.Element | string;
  scissors: JSX.Element | string;
  lizard: JSX.Element | string;
  spock: JSX.Element | string;
}
