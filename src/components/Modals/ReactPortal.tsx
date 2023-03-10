import { createPortal } from "react-dom";

export interface ReactPortalProps {
  children: JSX.Element;
  wrapperId: string;
}
const ReactPortal: React.FC<ReactPortalProps> = ({ children, wrapperId }) => {
  const containerElement = document.getElementById(wrapperId) as Element;

  return createPortal(children, containerElement);
};

export default ReactPortal;
