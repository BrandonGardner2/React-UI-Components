import React from "react";
import "./Calculator.css";

import CalculatorDisplay from "../DisplayComponents/CalculatorDisplay";
import CalcButtons from "../ButtonComponents/CalcButtons";

const Calculator = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <CalcButtons />
    </div>
  );
};

export default Calculator;
