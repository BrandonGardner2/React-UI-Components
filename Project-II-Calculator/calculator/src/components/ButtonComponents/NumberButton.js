import React from "react";

const NumberButton = props => {
  return <div className={props.className + " btn"}>{props.data}</div>;
};

export default NumberButton;
