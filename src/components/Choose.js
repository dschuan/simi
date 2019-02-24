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
      answers: [],
      timerDone: false,
      selected: ''
    }
    this.timerComplete = this.timerComplete.bind(this)
    this.handleSelection = this.handleSelection.bind(this)

  }

  timerComplete(){
    this.setState({timerDone: true})
    this.props.changeStatus(4)
  }

  handleSelection(e) {
    this.setState({selected: e})
  }

  componentDidMount() {
    //update answers here
    this.setState({
        answers: [["De sheng", "When you fell from heaven pain not? blah blah blah"], ["Crystal", "Ai stead mai?"], ["Adna", "I will cook, clean, wash dishes, massage you, give you breakfast in bed, ...., if you go out with me"]],
    })
  }

  render() {
    let buttonAnswers = [];
    for (var i = 0; i < this.state.answers.length; i++){
      buttonAnswers.push(
        <ToggleButton className='mt-3' type="radio" value={this.state.answers[i][0]}> {this.state.answers[i][1]}</ToggleButton>
      )
    }

    return (
      <div className='choose'>
        <h1 className='header1'>What would {this.props.gm} say when asking a girl out?</h1>
        <ToggleButtonGroup onChange={this.handleSelection} vertical className='choose' name="options">
          {buttonAnswers}
        </ToggleButtonGroup>
        {this.state.answers.length > 0 ? 'An answer is selected liao' : ''}
        <div className='timer'>
          <CountDownTimer timerComplete={this.timerComplete}/>
        </div>
      </div>
    );
  }
}

export default Choose;
