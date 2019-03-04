import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const CalcButtons = props => {
  return (
    <div className="calcButtons">
      <ActionButton
        data={"clear"}
        className="seventyFive clear"
        id="clear"
        onClick={props.clearAll}
      />
      <ActionButton
        data={String.fromCharCode(247)}
        className="twentyFive"
        id="divide"
        onClick={props.handleOperatorPress}
      />

      <NumberButton
        data={7}
        className="twentyFive"
        id={7}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={8}
        className="twentyFive"
        id={8}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={9}
        className="twentyFive"
        id={9}
        onClick={props.handleNumberPress}
      />
      <ActionButton
        data={String.fromCharCode(215)}
        className="twentyFive"
        id={"multiply"}
        onClick={props.handleOperatorPress}
      />

      <NumberButton
        data={4}
        className="twentyFive"
        id={4}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={5}
        className="twentyFive"
        id={5}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={6}
        className="twentyFive"
        id={6}
        onClick={props.handleNumberPress}
      />
      <ActionButton
        data={"-"}
        className="twentyFive"
        id="subtract"
        onClick={props.handleOperatorPress}
      />

      <NumberButton
        data={1}
        className="twentyFive"
        id={1}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={2}
        className="twentyFive"
        id={2}
        onClick={props.handleNumberPress}
      />
      <NumberButton
        data={3}
        className="twentyFive"
        id={3}
        onClick={props.handleNumberPress}
      />
      <ActionButton
        data={"+"}
        className="twentyFive"
        id="add"
        onClick={props.handleOperatorPress}
      />

      <NumberButton
        data={0}
        className="seventyFive"
        id={0}
        onClick={props.handleNumberPress}
      />
      <ActionButton
        data={"="}
        className="twentyFive"
        onClick={props.calculate}
      />
    </div>
  );
};

export default CalcButtons;
