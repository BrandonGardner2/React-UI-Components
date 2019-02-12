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

  clearAll = () => {
    this.setState({
      firstNum: 0,
      secondNum: "",
      operator: ""
    });
  };

  clearSecondAndOp = () => {
    this.setState({
      secondNum: "",
      operator: ""
    });
  };

  calculate = () => {
    switch (this.state.operator) {
      case "multiply":
        this.setState({
          firstNum: this.state.firstNum * this.state.secondNum,
          secondNum: ""
        });
        this.clearSecondAndOp();
        break;
      case "divide":
        this.setState({
          firstNum: this.state.firstNum / this.state.secondNum,
          secondNum: ""
        });
        this.clearSecondAndOp();
        break;
      case "add":
        this.setState({
          firstNum: this.state.firstNum + this.state.secondNum,
          secondNum: ""
        });
        this.clearSecondAndOp();
        break;
      case "subtract":
        this.setState({
          firstNum: this.state.firstNum - this.state.secondNum,
          secondNum: ""
        });
        this.clearSecondAndOp();
        break;
      default:
        break;
    }
  };

  handleOperatorPress = e => {
    if (this.state.secondNum !== "") {
      this.calculate(e.target.id);
    } else {
      this.setState({
        operator: e.target.id
      });
    }
  };

  handleNumberPress = e => {
    if (this.state.secondNum !== "") {
      console.log(e.target.id);
      this.setState({
        secondNum: this.state.secondNum.concat(e.target.id)
      });
    } else {
      this.setState({
        secondNum: e.target.id
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay displayNum={this.state.firstNum} />
        <CalcButtons
          handleNumberPress={this.handleNumberPress}
          handleOperatorPress={this.handleOperatorPress}
          calculate={this.calculate}
          clearAll={this.clearAll}
        />
      </div>
    );
  }
}
