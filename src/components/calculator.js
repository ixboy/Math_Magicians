import './calculator.css';

import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.createDigits = () => {
      const digits = [];
      for (let i = 9; i > 0; i -= 1) {
        digits.push(
          <button key={i} type="button">{i}</button>,
        );
      }
      return digits;
    };
  }

  render() {
    return (
      <div className="container">
        <div className="display"><span>0</span></div>
        <div className="buttons">
          <div className="extra">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
          </div>
          <div className="operators">
            <button type="button">+</button>
            <button type="button">*</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
          <div className="digits">
            {this.createDigits()}
          </div>
          <div className="dif">
            <button className="btn" type="button">0</button>
            <button type="button">.</button>
          </div>
        </div>
      </div>
    );
  }
}
