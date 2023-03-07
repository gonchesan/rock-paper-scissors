import { Modals } from "./Modals";

export interface SelectModeProps {
  setModals: (value: React.SetStateAction<Modals>) => void;
  modals: Modals;
  setMode: (value: React.SetStateAction<string | null>) => void;
}
