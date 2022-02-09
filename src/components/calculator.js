/* eslint-disable react/destructuring-assignment */
import './calculator.css';

import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.createDigits = () => {
      const digits = [];
      for (let i = 9; i > 0; i -= 1) {
        digits.push(
          <button type="button" onClick={this.handleNumber}>{i}</button>,
        );
      }
      return digits;
    };
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber = (e) => {
    const result = calculate(this.state, e.target.innerHTML);
    this.setState(result);
  };

  render() {
    return (
      <div className="container">
        <div className="display">
          <span placeholder="0">
            {this.state.total}
            {this.state.operation}
            {this.state.next}
          </span>
        </div>
        <div className="buttons">
          <div className="extra">
            <button type="button" onClick={this.handleNumber}>AC</button>
            <button type="button" onClick={this.handleNumber}>+/-</button>
            <button type="button" onClick={this.handleNumber}>%</button>
          </div>
          <div className="operators">
            <button type="button" onClick={this.handleNumber}>+</button>
            <button type="button" onClick={this.handleNumber}>*</button>
            <button type="button" onClick={this.handleNumber}>-</button>
            <button type="button" onClick={this.handleNumber}>+</button>
            <button type="button" onClick={this.handleNumber}>=</button>
          </div>
          <div className="digits">
            {this.createDigits()}
          </div>
          <div className="dif">
            <button className="btn" type="button" onClick={this.handleNumber}>0</button>
            <button type="button" onClick={this.handleNumber}>.</button>
          </div>
        </div>
      </div>
    );
  }
}
