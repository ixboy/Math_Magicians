/* eslint-disable react/destructuring-assignment */
import './calculator.css';

import React, { useState } from 'react';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [states, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = states;

  const handleNumber = (e) => {
    setState(calculate(states, e.target.innerHTML));
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button type="button" key={i} onClick={handleNumber}>{i}</button>,
      );
    }
    return digits;
  };

  return (
    <div className="container">
      <div className="display">
        <span>
          {Math.round(total * 100) / 100}
          {operation}
          {next}
        </span>
      </div>
      <div className="buttons">
        <div className="extra">
          <button type="button" onClick={handleNumber}>AC</button>
          <button type="button" onClick={handleNumber}>+/-</button>
          <button type="button" onClick={handleNumber}>%</button>
        </div>
        <div className="operators">
          <button type="button" onClick={handleNumber}>+</button>
          <button type="button" onClick={handleNumber}>x</button>
          <button type="button" onClick={handleNumber}>-</button>
          <button type="button" onClick={handleNumber}>÷</button>
          <button type="button" onClick={handleNumber}>=</button>
        </div>
        <div className="digits">
          {createDigits()}
        </div>
        <div className="dif">
          <button className="btn" type="button" onClick={handleNumber}>0</button>
          <button type="button" onClick={handleNumber}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
