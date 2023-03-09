export interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
  canClose: boolean;
}
