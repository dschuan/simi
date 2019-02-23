import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class InputLine extends Component {
  constructor(props) {
    super(props)
    this.state={payload: '', redirect:false}
    this.submitAction = this.submitAction.bind(this)
    this.handleText = this.handleText.bind(this)

  }
  submitAction(e) {
    console.log('Action submitted')
    console.log(this.state.payload)
    if (this.props.new) {
      console.log('New room')
      //send stuff to api
      let payload = this.state.payload
      payload.replace(/ /g, '-')
      this.setState({payload: payload, redirect:true})
    } else {
      console.log('Join room')
      let payload = this.state.payload
      payload.replace(/ /g, '-')
      this.setState({payload: payload, redirect:true})
    }
  }
  handleText(e) {
    this.setState({payload: e.target.value})
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={`/room/${this.state.payload}`} />
    }
  }
  render() {
    return (
      <Form onSubmit={this.submitAction}>
        <Form.Group controlId={this.props.id}>
          <Form.Control
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.handleText}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          {this.props.buttonText}
        </Button>
        {this.renderRedirect()}
      </Form>
    );
  }
}

export default InputLine;
