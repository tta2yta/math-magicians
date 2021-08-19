import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onChange = () => {

  };

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.outerText) });
  };
  const { next, total } = state;
  return (
    <div className="calculator">
      <div>
        <div className="calculator-body">
          <div className="input-val">
            <input type="text" value={next || total || '0'} onChange={onChange} data-testid="mainResult" />

          </div>
        </div>
        <div className="calculator-body">
          <div className="calc-row" onClick={handleClick} data-testid="AC">AC</div>
          <div className="calc-row" onClick={handleClick} data-testid="+/-">+/-</div>
          <div className="calc-row" onClick={handleClick} data-testid="%">%</div>
          <div className="calc-row arthemetic" onClick={handleClick} data-testid="">÷</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={handleClick} data-testid="7">7</div>
          <div className="calc-row" onClick={handleClick} data-testid="8">8</div>
          <div className="calc-row" onClick={handleClick} data-testid="9">9</div>
          <div className="calc-row arthemetic" onClick={handleClick} data-testid="x">x</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={handleClick} data-testid="4">4</div>
          <div className="calc-row" onClick={handleClick} data-testid="5">5</div>
          <div className="calc-row" onClick={handleClick} data-testid="6">6</div>
          <div className="calc-row arthemetic" onClick={handleClick} data-testid="-">-</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={handleClick} data-testid="1">1</div>
          <div className="calc-row" onClick={handleClick} data-testid="2">2</div>
          <div className="calc-row" onClick={handleClick} data-testid="3">3</div>
          <div className="calc-row  arthemetic" onClick={handleClick} data-testid="+">+</div>
        </div>

        <div className="calculator-body-last">
          <div className="calc-row cols-span-2" onClick={handleClick} data-testid="0">0</div>
          <div className="calc-row" onClick={handleClick} data-testid=".">.</div>
          <div className="calc-row arthemetic" onClick={handleClick} data-testid="=">=</div>
        </div>
      </div>
      <div className="math-logic">
        <h2>Let&#39;s do some math</h2>
      </div>
    </div>
  );
};

export default Calculator;
