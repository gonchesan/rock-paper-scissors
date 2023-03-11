import React from "react";

import { FooterProps } from "@/models/Footer";

import { ReactComponent as ReturnIcon } from "@/assets/icons/return.svg";
import "./styles.scss";
import Button from "@/components/Button";

const Footer: React.FC<FooterProps> = ({ restartGame, openRulesModal }) => {
  return (
    <div className="footer">
      <div className="footer__buttons">
        <Button className="button-return " onClick={() => restartGame(true)}>
          <ReturnIcon />
        </Button>
        <Button className="secondary" onClick={openRulesModal}>
          Rules
        </Button>
      </div>
    </div>
  );
};

export default Footer;
