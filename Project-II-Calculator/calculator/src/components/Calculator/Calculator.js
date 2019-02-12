import React from "react";
import "./Calculator.css";

import CalculatorDisplay from "../DisplayComponents/CalculatorDisplay";
import CalcButtons from "../ButtonComponents/CalcButtons";

export default class Calculator extends React.Component {
  state = {
    firstNum: 0,
    secondNum: "",
    operator: ""
  };

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayNum={this.state.firstNum} />
        <CalcButtons />
      </div>
    );
  }
}
