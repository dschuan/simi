import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class InputLine extends Component {
  constructor(props) {
    super(props)
    this.state={payload: ''}
    this.submitAction = this.submitAction.bind(this)
    this.handleText = this.handleText.bind(this)

  }
  submitAction(e) {
    console.log('Action submitted')
    console.log(this.state.payload)
    if (this.props.new) {
      console.log('New room')
    } else {
      console.log('Join room')
    }
  }
  handleText(e) {
    this.setState({payload: e.target.value})
  }
  render() {
    return (
      <Form>
        <Form.Group controlId={this.props.id}>
          <Form.Control
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.handleText}/>
        </Form.Group>

        <Button variant="primary" onClick={this.submitAction}>
          {this.props.buttonText}
        </Button>
      </Form>
    );
  }
}

export default InputLine;
