import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/resultcomponent";
import KeyPadComponent from "./components/keypadcomponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
      console.log(this.state.result);
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="main">
        <div className="padding">
          <p>Created By Manoj Ayyanawar</p>
        </div>
        <div className="container">
          <div className="header">
            <h1>SIMPLE CALCULATOR</h1>
          </div>
          <div className="calculator-body">
            <ResultComponent result={this.state.result} />
            <KeyPadComponent onClick={this.onClick} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
