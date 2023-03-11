import React from "react";

import "./styles.scss";
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      className={`button ${props.className ? props.className : ""}`}
    >
      <span className="button__edge"></span>
      <span className="button__front button__text">{props.children}</span>
    </button>
  );
};

export default Button;
