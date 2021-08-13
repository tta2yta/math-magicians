import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
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
      <div className="calculator-body">
        <div className="input-val">
          {/* <input type="text" value={next===null? total : next} onChange={onChange} /> */}
          <input type="text" value={next || total || '0'} onChange={onChange} />

        </div>
      </div>
      <div className="calculator-body">
        <div className="calc-row" onClick={handleClick}>AC</div>
        <div className="calc-row" onClick={handleClick}>+/-</div>
        <div className="calc-row" onClick={handleClick}>%</div>
        <div className="calc-row arthemetic" onClick={handleClick}>÷</div>
      </div>

      <div className="calculator-body">
        <div className="calc-row" onClick={handleClick}>7</div>
        <div className="calc-row" onClick={handleClick}>8</div>
        <div className="calc-row" onClick={handleClick}>9</div>
        <div className="calc-row arthemetic" onClick={handleClick}>x</div>
      </div>

      <div className="calculator-body">
        <div className="calc-row" onClick={handleClick}>4</div>
        <div className="calc-row" onClick={handleClick}>5</div>
        <div className="calc-row" onClick={handleClick}>6</div>
        <div className="calc-row arthemetic" onClick={handleClick}>-</div>
      </div>

      <div className="calculator-body">
        <div className="calc-row" onClick={handleClick}>1</div>
        <div className="calc-row" onClick={handleClick}>2</div>
        <div className="calc-row" onClick={handleClick}>3</div>
        <div className="calc-row  arthemetic" onClick={handleClick}>+</div>
      </div>

      <div className="calculator-body-last">
        <div className="calc-row cols-span-2" onClick={handleClick}>0</div>
        <div className="calc-row" onClick={handleClick}>.</div>
        <div className="calc-row arthemetic" onClick={handleClick}>=</div>
      </div>
    </div>
  );
}
