import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './input.css'

class GmInputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "What would you say when asking a girl out?",// props.question, //string
    }

  }

  render() {

    return (

      <div className='background'>
        <h1 id="" className="toptext center black">{this.state.question}</h1>
        <form>
          <input className="center answerinput" type="text" name="answer" placeholder="your answer"/>
          <div><Button as="input" type="submit" className="center submitbutton" value="Submit" /></div>
        </form>

      </div>
    );
  }
}

export default GmInputText;
