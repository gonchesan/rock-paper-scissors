import { FC } from "react";
import "../styles/Header.scss";
import TrophyIcon from "../assets/images/trophy.png";

export interface HeaderProps {
  mode: string | null;
  score: number;
}
const Header: FC<HeaderProps> = ({ mode, score }) => {
  return (
    <div className="header">
      <h3 className="header__title">{mode} mode</h3>
      <div className="header__score">
        <img className="icon" src={TrophyIcon} alt="trophy icon" />
        {/* <span className="icon">
        </span> */}
        <p className="score-points">{score}</p>
      </div>
    </div>
  );
};

export default Header;
