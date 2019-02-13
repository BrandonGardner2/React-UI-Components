import React from "react";

const ActionButton = props => {
  return <div className={props.className + " btn actionBtn"}>{props.data}</div>;
};

export default ActionButton;
