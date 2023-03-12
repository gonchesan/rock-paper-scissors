import { RESULTS } from "@/utils/constants";

import { RibbonProps } from "@/models/Ribbon";

import "./styles.scss";
const Ribbon: React.FC<RibbonProps> = ({ result }) => {
  return (
    <div className={`ribbon${result === "win" ? "--won" : ""}`}>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <span className="ribbon-top"></span>
      <p> {RESULTS[result]}</p>
    </div>
  );
};

export default Ribbon;
