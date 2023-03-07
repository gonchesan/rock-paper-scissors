import { Modals } from "./Modals";

export interface RulesProps {
  setModals: (value: React.SetStateAction<Modals>) => void;
  modals: Modals;
  mode: string | null;
}
