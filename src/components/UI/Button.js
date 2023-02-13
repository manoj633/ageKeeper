import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn waves-effect waves-light"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
