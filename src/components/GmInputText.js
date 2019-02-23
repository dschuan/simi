import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './input.css'

class GmInputText extends Component {
  constructor(props) {
    super(props);
    const gm = this.props.isGm ? 'You' : this.props.gm
    this.state = {
      question: `What would ${gm} say when asking a girl out?`,// props.question, //string
      answer: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  onChange(e) {
    this.setState({answer: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    //send option
    const payload = this.state.answer;
    console.log(payload)
    if (this.props.isGm) {
      this.props.changeAudio(true)
    } else {
      this.props.changeStatus(2)
    }

  }
  render() {

    return (

      <div className='background'>
        <h1 id="" className="toptext center black">{this.state.question}</h1>
        <form onChange={this.onChange} onSubmit={this.handleSubmit}>
          <input className="center answerinput" type="text" name="answer" placeholder="your answer"/>
          <div><Button as="input" type="submit" className="center submitbutton" value="Submit" /></div>
        </form>

      </div>
    );
  }
}

export default GmInputText;
