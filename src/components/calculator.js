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
    if ((e.target.outerText)) {
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

  // isNumber=(item) => !!item.match(/[0-9]+/)

  render() {
    const { next } = this.state;
    return (
      <div className="calculator">
        <div>
          <div className="calculator-body">
            <div className="input-val">
              <input type="text" value={next} onChange={this.handleChange} data-testid="mainResult" />
            </div>
          </div>
          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick} data-testid="AC">AC</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="+/-">+/-</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="%">%</div>
            <div className="calc-row arthemetic" onClick={this.handleClick} data-testid="÷">÷</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick} data-testid="7">7</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="8">8</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="9">9</div>
            <div className="calc-row arthemetic" onClick={this.handleClick} data-testid="x">x</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick} data-testid="4">4</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="5">5</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="6">6</div>
            <div className="calc-row arthemetic" onClick={this.handleClick} data-testid="-">-</div>
          </div>

          <div className="calculator-body">
            <div className="calc-row" onClick={this.handleClick} data-testid="1">1</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="2">2</div>
            <div className="calc-row" onClick={this.handleClick} data-testid="3">3</div>
            <div className="calc-row  arthemetic" onClick={this.handleClick} data-testid="+">+</div>
          </div>

          <div className="calculator-body-last">
            <div className="calc-row cols-span-2" onClick={this.handleClick} data-testid="0">0</div>
            <div className="calc-row" onClick={this.handleClick} data-testid=".">.</div>
            <div className="calc-row arthemetic" onClick={this.handleClick} data-testid="=">=</div>
          </div>
        </div>
        <div className="math-logic">
          <h2>Let&#39;s do some math</h2>
        </div>
      </div>
    );
  }
}
