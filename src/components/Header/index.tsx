import { HeaderProps } from "@/models/Header";
import TrophyIcon from "@/assets/images/trophy.png";

import "./styles.scss";

const Header: React.FC<HeaderProps> = ({ mode, score }) => {
  return (
    <div className="header">
      <h3 className="header__title">{mode} mode</h3>
      <div className="header__score">
        <img className="icon" src={TrophyIcon} alt="trophy icon" />
        <p className="score-points">{score}</p>
      </div>
    </div>
  );
};

export default Header;
