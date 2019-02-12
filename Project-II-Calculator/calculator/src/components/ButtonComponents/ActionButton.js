import React from "react";

const ActionButton = props => {
  return (
    <div
      className={props.className + " btn actionBtn"}
      id={props.id}
      onClick={props.onClick}
    >
      {props.data}
    </div>
  );
};

export default ActionButton;
