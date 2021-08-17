import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculatorHooks';
import NavBar from './components/NavBar';
import Home from './pages/home';
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

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/Qoutes">
            <Qoutes />
          </Route>
        </Switch>
      </div>
    );
  }
}
