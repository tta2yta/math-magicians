/* eslint-disable */
import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

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

   isNumber(item) {
    return !!item.match(/[0-9]+/);
  }

  handleChange(e){
    this.setState({next: e.target.value});
  }

  handleClick(e){

    if(this.isNumber(e.target.outerText)){
      console.log("num")
      this.setState({next:e.target.outerText})
     const res= calculate(this.state, e.target.outerText)
     this.setState({next:res.next})
     console.log(res)
      
    }

    if(e.target.outerText==='+' || e.target.outerText==='-' || e.target.outerText==='x' || e.target.outerText==='÷'){
      this.setState({operation:e.target.outerText})
      const res= calculate(this.state, e.target.outerText)
     this.setState({...res})
     console.log(res)
     console.log(this.state)

    }

    if(e.target.outerText==='='){
      const res= calculate(this.state, e.target.outerText)
        this.setState({...res})
        this.setState({next:res.total})
      console.log(res)
      console.log(this.state)
    }
    if(e.target.outerText==='.'){
      const res= calculate(this.state, e.target.outerText)
        this.setState({...res})
        this.setState({next:res.next})
    }
  }
componentDidUpdate(){
  // console.log(this.state)
  
}

  render() {
    return (
      <div className="calculator">
        <div className="calculator-body">
          <div className="input-val" >
            <input type="text" value={this.state.next} onChange={this.handleChange}  />
          </div>
        </div>
        <div className="calculator-body">
          <div className="calc-row" onClick={this.handleClick} >AC</div>
          <div className="calc-row" onClick={this.handleClick} >+/-</div>
          <div className="calc-row" onClick={this.handleClick} >%</div>
          <div className="calc-row arthemetic" onClick={this.handleClick} >÷</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={this.handleClick} >7</div>
          <div className="calc-row" onClick={this.handleClick} >8</div>
          <div className="calc-row" onClick={this.handleClick} >9</div>
          <div className="calc-row arthemetic" onClick={this.handleClick} >x</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={this.handleClick} >4</div>
          <div className="calc-row" onClick={this.handleClick} >5</div>
          <div className="calc-row" onClick={this.handleClick} >6</div>
          <div className="calc-row arthemetic" onClick={this.handleClick} >-</div>
        </div>

        <div className="calculator-body">
          <div className="calc-row" onClick={this.handleClick} >1</div>
          <div className="calc-row" onClick={this.handleClick} >2</div>
          <div className="calc-row" onClick={this.handleClick} >3</div>
          <div className="calc-row  arthemetic" onClick={this.handleClick} >+</div>
        </div>

        <div className="calculator-body-last">
          <div className="calc-row cols-span-2" onClick={this.handleClick} >0</div>
          <div className="calc-row" onClick={this.handleClick} >.</div>
          <div className="calc-row arthemetic" onClick={this.handleClick} >=</div>
        </div>
      </div>
    );
  }
}
