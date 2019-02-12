import React from "react";
import "./Display.css";

import DisplayNum from "./DisplayNum";

const CalculatorDisplay = props => {
  return (
    <div className="calcDisplay">
      <DisplayNum displayNum={props.displayNum} />
    </div>
  );
};

export default CalculatorDisplay;
