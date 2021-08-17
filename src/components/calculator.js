import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { next } = this.state;
    if (next === null) {
      this.setState({ next: 0 });
    }
  }

  handleChange(e) {
    this.setState({ next: e.target.value });
  }

  handleClick(e) {
    if (this.isNumber(e.target.outerText)) {
      this.setState({ next: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
    }

    if (e.target.outerText === '+' || e.target.outerText === '-' || e.target.outerText === 'x' || e.target.outerText === '÷') {
      this.setState({ operation: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
      this.setState({ total: res.total });
      console.log(res);
    }

    if (e.target.outerText === '=') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.total });
    }
    if (e.target.outerText === '.') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);

      if (Object.entries(res).length !== 0) {
        this.setState({ ...res });
        this.setState({ next: res.next });
      }
    }
    if (e.target.outerText === 'AC') {
      const reset = { total: 0, next: 0, operation: null };
      this.setState({ ...reset });
    }
    if (e.target.outerText === '+/-') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.next });
    }
    if (e.target.outerText === '%') {
      const obj = this.state;
      this.setState({ next: parseFloat(obj.next / 100).toString() });
    }
  }

  isNumber=(item) => !!item.match(/[0-9]+/)

  render() {
    const { next } = this.state;
    return (
      <div className="calculator">
        <div>
          <div className="calculator-body">
            <div className="input-val">
              <input type="text" value={next} onChange={this.handleChange} />
            </div>
          </div>
          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick}>AC</div>
            <div className="calc-row" onClick={this.handleClick}>+/-</div>
            <div className="calc-row" onClick={this.handleClick}>%</div>
            <div className="calc-row arthemetic" onClick={this.handleClick}>÷</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick}>7</div>
            <div className="calc-row" onClick={this.handleClick}>8</div>
            <div className="calc-row" onClick={this.handleClick}>9</div>
            <div className="calc-row arthemetic" onClick={this.handleClick}>x</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick}>4</div>
            <div className="calc-row" onClick={this.handleClick}>5</div>
            <div className="calc-row" onClick={this.handleClick}>6</div>
            <div className="calc-row arthemetic" onClick={this.handleClick}>-</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick}>1</div>
            <div className="calc-row" onClick={this.handleClick}>2</div>
            <div className="calc-row" onClick={this.handleClick}>3</div>
            <div className="calc-row  arthemetic" onClick={this.handleClick}>+</div>
          </div>

          <div className="calculator-body-last">
            <div className="calc-row cols-span-2" onClick={this.handleClick}>0</div>
            <div className="calc-row" onClick={this.handleClick}>.</div>
            <div className="calc-row arthemetic" onClick={this.handleClick}>=</div>
          </div>
        </div>
        <div className="math-logic">
          <h2>Let&#39;s do some math</h2>
        </div>
      </div>
    );
  }
}
