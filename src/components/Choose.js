import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, ToggleButton, ButtonToolbar, ToggleButtonGroup} from 'react-bootstrap';
import Countdown from 'react-countdown-now';
import CountDownTimer from './CountdownTimer'

import './choose.css';
class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [["De sheng", "Answer 1"], ["Crystal", "Answer 2"], ["Adna", "Answer 3"]],
      timerDone: false,
    }

  }
  timerComplete(){
    this.setState({timerDone: true})
  }


  render() {
    let buttonAnswers = [];
    for (var i = 0; i < this.state.answers.length; i++){
      buttonAnswers.push(
        <ToggleButton className='mt-3' type="radio" value={this.state.answers[i][0]}> {this.state.answers[i][1]}</ToggleButton>
      )
    }

    const Completionist = () => <span>Submitted!</span>;

    return (
      <div className='choose'>
        <h1 className='header1'>What would derp say when asking a girl out?</h1>
        <ToggleButtonGroup vertical className='choose' name="options">
          {buttonAnswers}
        </ToggleButtonGroup>
        <div className='timer'>
          <CountDownTimer/>
        </div>
      </div>
    );
  }
}

export default Choose;
