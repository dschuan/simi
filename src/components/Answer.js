import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, ToggleButton, ButtonToolbar, ToggleButtonGroup} from 'react-bootstrap';
import Typing from 'react-typing-animation';

import './answer.css'
class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobURL: "http://192.168.43.8:5000/sound/voice.webm",
      /*answer: props.answer;*/
      answer: "boo!"
    }
  }
  changeScreen() {
    setTimeout(() => {
      this.props.changeStatus(5)
    }, 2000)
  }
  render() {
    return (
      <div className='answer'>
        <h1 className='header1'>Answer is...</h1>
        <Typing>
          <h2 className='header2'> {this.state.answer} </h2>
        </Typing>
        <div display='none'>
          <audio className="audio center" ref="audioSource" controls autoPlay >
          <source src={this.state.blobURL}/>
          </audio>
        </div>
        {this.changeScreen()}
      </div>
    );
  }
}

export default Answer;
