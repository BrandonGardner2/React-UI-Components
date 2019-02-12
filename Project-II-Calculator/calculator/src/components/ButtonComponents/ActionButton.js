import React from "react";

const ActionButton = props => {
  return <div className={props.className + " btn"}>{props.data}</div>;
};

export default ActionButton;
