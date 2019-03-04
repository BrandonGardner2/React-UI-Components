import React from "react";
import "./Calculator.css";

import CalculatorDisplay from "../DisplayComponents/CalculatorDisplay";
import CalcButtons from "../ButtonComponents/CalcButtons";

export default class Calculator extends React.Component {
  state = {
    firstNum: 0,
    secondNum: "",
    operator: "",
    calcCount: 0
  };

  clearAll = () => {
    this.setState({
      firstNum: 0,
      secondNum: "",
      operator: "",
      calcCount: 0
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
          firstNum: Number(this.state.firstNum) * Number(this.state.secondNum),
          secondNum: "",
          calcCount: this.state.calcCount + 1
        });
        this.clearSecondAndOp();
        break;
      case "divide":
        this.setState({
          firstNum: Number(this.state.firstNum) / Number(this.state.secondNum),
          secondNum: "",
          calcCount: this.state.calcCount + 1
        });
        this.clearSecondAndOp();
        break;
      case "add":
        this.setState({
          firstNum: Number(this.state.firstNum) + Number(this.state.secondNum),
          secondNum: "",
          calcCount: this.state.calcCount + 1
        });
        this.clearSecondAndOp();
        break;
      case "subtract":
        this.setState({
          firstNum: Number(this.state.firstNum) - Number(this.state.secondNum),
          secondNum: "",
          calcCount: this.state.calcCount + 1
        });
        this.clearSecondAndOp();
        break;
      default:
        break;
    }
  };

  handleOperatorPress = e => {
    if (this.state.secondNum !== "") {
      this.calculate();
      this.setState({
        operator: e.target.id
      });
    } else {
      this.setState({
        operator: e.target.id
      });
    }
  };

  handleNumberPress = e => {
    if (this.state.firstNum === 0) {
      this.setState({
        firstNum: e.target.id
      });
    } else if (this.state.operator === "" && this.state.calcCount === 0) {
      this.setState({
        firstNum: this.state.firstNum.toString().concat(e.target.id)
      });
    } else if (this.state.secondNum !== "") {
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
        <CalculatorDisplay
          displayNum={
            this.state.secondNum ? this.state.secondNum : this.state.firstNum
          }
        />
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
