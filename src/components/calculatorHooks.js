import { useState } from "react";

export function Calculator(){
    const [total, setTotal]=useState(0);
    const [next, setNext]=useState(0);
    const [operation, setOperation]=useState(null);

    return (
        <div className="calculator">
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
      );

}