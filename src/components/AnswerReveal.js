import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, ToggleButton, ButtonToolbar, ToggleButtonGroup} from 'react-bootstrap';
import Countdown from 'react-countdown-now';

import './choose.css'
class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [["De sheng", "Answer 1"], ["Crystal", "Answer 2"], ["Adna", "Answer 3"]],

    }
  }

  renderExistForm() {
    return (
      <div>
      </div>
    )
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
        <Countdown className='timer' date={Date.now() + 10000} intervalDelay={0} precision={3}
          renderer={props => <div className='timer'>{props.seconds} <Completionist/></div>}>

        </Countdown>
      </div>
    );
  }
}

export default Choose;
