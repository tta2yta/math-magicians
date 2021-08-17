import React from 'react';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculatorHooks';
import NavBar from './components/NavBar';
import About from './pages/about';
import Qoutes from './pages/Qoutes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Router path="/">
            <Calculator />
          </Router>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/Qoutes">
            <Qoutes />
          </Router>
        </Switch>
      </div>
    );
  }
}
