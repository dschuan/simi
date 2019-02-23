import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Room from './pages/Room'
import Choose from './components/Choose'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room" component={Room} />
          <Route path="/choose" component={Choose} />
        </Switch>
      </Router>
    );
  }
}

export default App;
