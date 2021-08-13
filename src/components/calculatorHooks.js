/* eslint-disable */
import {useState, useEffect, useRef } from 'react';
import calculate from '../logic/calculate';

export function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);
  const prevCountRef = useRef();

  const handleClick = (e) => {
    if (isNumber(e.target.outerText)) {
        console.log(e.target.outerText)
        setNext(e.target.value)
        const obj = {total, next, operation}
        console.log(obj)
        const res = calculate(obj, e.target.outerText);
        console.log(res)
        setNext(res.next)
        
      }

      if (e.target.outerText === '+' || e.target.outerText === '-' || e.target.outerText === 'x' || e.target.outerText === '÷') {
        // this.setState({ operation: e.target.outerText });
        let obj={}
        if (e.target.outerText === 'x' || e.target.outerText === '÷'){
            setTotal(total=== null ? 1 : total);
             obj = {total:total=== null ? 1 : total, next: next===null? 1: next, operation:e.target.outerText}
        }
        if (e.target.outerText === '+' || e.target.outerText === '-'){
            setTotal(total=== null ? 0 : total);
             obj = {total:total=== null ? 0 : total, next: next===null? 0 : next, operation:e.target.outerText}
        }
        console.log(total)
        setOperation(e.target.outerText)
        console.log(e.target.outerText)
        
        console.log(obj)
        const res = calculate(obj, e.target.outerText);
        // this.setState({ next: res.next });
        // this.setState({ total: res.total });
        setNext(res.next)
        setTotal(res.total)
        console.log(res);
      }

      if (e.target.outerText === '=') {
        const obj = {total, next, operation}
        console.log(obj)
        const res = calculate(obj, e.target.outerText);
        console.log(res)
        setNext(res.next)
        setOperation(res.operation)
        setTotal(res.total)
      }
      if (e.target.outerText === '.') {
        const obj = {total, next, operation}
        console.log(obj)
        const res = calculate(obj, e.target.outerText);
        console.log(res)
        if (Object.entries(res).length !== 0) {
          setNext(res.next===undefined ? next : res.next)
          setOperation(null)
          setTotal(res.total === undefined ? total : res.total)
        }
      }

  };

  const onChange = (e) => {
    setNext(e.target.value);
    console.log(next)
  };

  useEffect(() => {
      const obj={total, next, operation}
    console.log(obj)
  });

  const isNumber=(item) => !!item.match(/[0-9]+/)
  return (
    <div className="calculator">
      <div className="calculator-body">
        <div className="input-val">
          <input type="text" value={next===null? total : next} onChange={onChange} />
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
