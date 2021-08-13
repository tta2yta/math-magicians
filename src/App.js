import React from 'react';
import './App.css';
// import Calculator from './components/calculator';
import Calculator from './components/calculatorHooks';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
