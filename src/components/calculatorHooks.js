/* eslint-disable */
import {useState } from 'react';

export function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleClick = () => {

  };

  const onChange = (e) => {
    setNext(e.target.value);
  };
  return (
    <div className="calculator">
      <div className="calculator-body">
        <div className="input-val">
          <input type="text" value={next} onChange={onchange} />
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
