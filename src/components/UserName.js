import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

import { room_namelist,connect,join_room } from '../api'

class UserName extends Component {
  constructor(props) {
    super(props)
    this.state={payload: ''}
    this.submitAction = this.submitAction.bind(this)
    this.handleText = this.handleText.bind(this)

  }
  submitAction(e) {
    console.log('Action submitted')
    console.log(this.state.payload)
    let payload = this.state.payload

    //websocket call to join room
    const name = payload
    const room = this.props.match.url
    console.log(name)
    console.log(room)
    join_room(name,room)

    sessionStorage.setItem('name', payload)
    this.props.changeStatus(1)
  }
  handleText(e) {
    this.setState({payload: e.target.value})
  }

  render() {
    return (
      <Form>
        <Form.Group controlId='key-user-name'>
          <Form.Control
          type="text"
          placeholder='Key in User Name'
          onChange={this.handleText}/>
        </Form.Group>
        <Button variant="primary" onClick={this.submitAction}>
          Register
        </Button>
      </Form>
    );
  }
}

export default UserName;
