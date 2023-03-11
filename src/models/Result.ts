import { Modals } from "./Modals";

export interface ResultProps {
  setModals: (value: React.SetStateAction<Modals>) => void;
  modals: Modals;
  result: string;
  restartGame: (selectMode: boolean) => void;
  picks: { playerPick: string; computerPick: string };
}
