export interface Modals {
  mode: boolean;
  result: boolean;
  rules: boolean;
}
export interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
  canClose: boolean;
}
