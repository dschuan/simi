import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';

import InputLine from '../components/InputLine';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinExist: false,
      joinNew: false
    }
    this.showExist = this.showExist.bind(this)
    this.hideExist = this.hideExist.bind(this)
    this.showNew = this.showNew.bind(this)
    this.hideNew = this.hideNew.bind(this)
  }

  showExist() {
    console.log("Hi")
    this.setState({joinExist: true})
  }

  hideExist() {
    this.setState({joinExist: false})
  }

  showNew() {
    this.setState({joinNew: true})
  }

  hideNew() {
    this.setState({joinNew: false})
  }

  renderExistForm() {
    return (
      <Modal
        show={this.state.joinExist}
        onHide={this.hideExist}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Join Existing Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputLine new={false} id='joingroup' placeholder='Enter room number here' buttonText='Enter room'/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideExist}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  renderNewRoom() {
    return (
      <Modal
        show={this.state.joinNew}
        onHide={this.hideNew}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputLine new={true} id='createnew' placeholder='Enter room number here' buttonText='Create room'/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideNew}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    return (
      <div className='home'>
        <h1 className='header1'>Simi</h1>
        <Button className='btun' onClick={this.showNew} >Create New Room</Button>
        <Button className='btun' onClick={this.showExist}> Join Existing Room </Button>

        {this.renderExistForm()}
        {this.renderNewRoom()}
      </div>
    );
  }
}

export default Home;
