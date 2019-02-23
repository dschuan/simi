import React, { Component } from 'react';

import CountDownTimer from './CountdownTimer'

import './choose.css';
class AfterAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerDone: false,
      waitingFor: []
    }
    this.timerComplete = this.timerComplete.bind(this)
  }
  componentDidMount() {
    this.setState({waitingFor: this.props.users})
  }

  timerComplete(){
    this.setState({timerDone: true})
    this.props.changeStatus(3)
  }

  render() {
    return (
      <div className='choose'>
        <h4>Aiya, mai tu liao</h4>
        <div className='timer'>
          <CountDownTimer timerComplete={this.timerComplete}/>
        </div>
      </div>
    );
  }
}

export default AfterAnswer;
