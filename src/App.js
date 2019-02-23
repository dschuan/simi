import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Room from './pages/Room'
import Choose from './components/Choose'
import ScoreBoard from './components/ScoreBoard'
import GmInputText from './components/GmInputText'
import GmInputAudio from './components/GmInputAudio'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:id" component={Room} />
          <Route path="/choose" component={Choose} />

          <Route path="/score" component={ScoreBoard} />
          <Route path="/gminputaudio" component={GmInputAudio} />
          <Route path="/gminputtext" component={GmInputText} />

        </Switch>
      </Router>
    );
  }
}

export default App;
