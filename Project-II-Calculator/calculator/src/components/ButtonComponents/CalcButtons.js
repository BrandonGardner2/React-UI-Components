import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const CalcButtons = () => {
  return (
    <div className="calcButtons">
      <ActionButton data={"clear"} className="seventyFive clear" />
      <ActionButton data={String.fromCharCode(247)} className="twentyFive" />

      <NumberButton data={7} className="twentyFive" />
      <NumberButton data={8} className="twentyFive" />
      <NumberButton data={9} className="twentyFive" />
      <ActionButton data={String.fromCharCode(215)} className="twentyFive" />

      <NumberButton data={4} className="twentyFive" />
      <NumberButton data={5} className="twentyFive" />
      <NumberButton data={6} className="twentyFive" />
      <ActionButton data={"-"} className="twentyFive" />

      <NumberButton data={1} className="twentyFive" />
      <NumberButton data={2} className="twentyFive" />
      <NumberButton data={3} className="twentyFive" />
      <ActionButton data={"+"} className="twentyFive" />

      <NumberButton data={0} className="seventyFive" />
      <ActionButton data={"="} className="twentyFive" />
    </div>
  );
};

export default CalcButtons;
