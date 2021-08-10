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
            <div className="calc-row"></div>
            <div className="calc-row"></div>
            <div className="calc-row"></div>
            <div className="calc-row"></div>
            <div className="calc-row"></div>
            </div>
      </div>
    );
  }
}
