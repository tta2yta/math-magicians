/* eslint-disable */
import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-body">
          <div className="calc-row">AC</div>
          <div className="calc-row">+/-</div>
          <div className="calc-row">%</div>
          <div className="calc-row">*</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row">AC</div>
          <div className="calc-row">+/-</div>
          <div className="calc-row">%</div>
          <div className="calc-row">/</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row">7</div>
          <div className="calc-row">8</div>
          <div className="calc-row">9</div>
          <div className="calc-row">*</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row">1</div>
          <div className="calc-row">2</div>
          <div className="calc-row">3</div>
          <div className="calc-row">+</div>
        </div>

        <div className="calculator-body-last">
          <div className="calc-row cols-span-2">0</div>
          <div className="calc-row">.</div>
          <div className="calc-row">=</div>
        </div>
      </div>
    );
  }
}
