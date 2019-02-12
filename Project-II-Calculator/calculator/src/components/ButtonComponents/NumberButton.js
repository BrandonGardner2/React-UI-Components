import React from "react";

const NumberButton = props => {
  return (
    <div
      className={props.className + " btn"}
      id={props.id}
      onClick={props.onClick}
    >
      {props.data}
    </div>
  );
};

export default NumberButton;
