import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // TODO: Initialize state
        this.state = {
            result: 0,
            num1: "",
            num2: "",
        }
    }

    handleFirstNum = e => {
        const value = Number.parseInt(e.target.value, 10);
        this.setState({ num1: value })
    };

    handleSecondNum = e => {
        const value = Number.parseInt(e.target.value, 10);
        this.setState({ num2: value })
    };

    handleAddition = e => {
        console.log(this.state.num1);
        this.setState({ result: this.state.num1 + this.state.num2 })
    };

    handleSubtraction = e => {
        console.log(this.state.num1);
        this.setState({ result: this.state.num1 - this.state.num2 })
    };

    handleMultiplication = e => {
        console.log(this.state.num1);
        this.setState({ result: this.state.num1 * this.state.num2 })
    };

    handleDivision = e => {
        console.log(this.state.num1);
        this.setState({ result: this.state.num1 / this.state.num2 })
    };

    clearHandler = e => {
        this.setState({ result: 0, num1: "", num2: "" });
    }



    render() {

        const { result, num1, num2 } = this.state;
        return (
            <div>
                <h1>Result: {result}</h1>
                <input onChange={this.handleFirstNum} placeholder="First number" value={num1} />
                <input onChange={this.handleSecondNum} placeholder="Second number" value={num2} />
                <button onClick={this.handleAddition}> Add </button>
                <button onClick={this.handleSubtraction}> Subtract </button>
                <button onClick={this.handleMultiplication}> Multiply </button>
                <button onClick={this.handleDivision}> Divide </button>
                <button onClick={this.clearHandler}> Clear </button>
            </div>
        );
    }
}

export default Calculator;