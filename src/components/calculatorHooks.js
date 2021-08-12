/* eslint-disable */
import {useState, useEffect, useRef } from 'react';
import calculate from '../logic/calculate';

export function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);
  const prevCountRef = useRef();

  const handleClick = (e) => {
    if (isNumber(e.target.outerText)) {
        console.log(e.target.outerText)
        const prevNext = prevCountRef.current;
        console.log(prevNext)
        const obj = {total:0, next:prevNext, operation:null}
        console.log(obj)
        const res = calculate(obj, e.target.outerText);
        console.log(res)
        setNext(res.next)
      }

  };

  const onChange = (e) => {
    setNext(e.target.value);
    console.log(next)
  };

  useEffect(() => {
    prevCountRef.current = next;
  });

  const isNumber=(item) => !!item.match(/[0-9]+/)
  return (
    <div className="calculator">
      <div className="calculator-body">
        <div className="input-val">
          <input type="text" value={next} onChange={onChange} />
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
