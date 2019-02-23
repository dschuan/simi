import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';

import './home.css'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinExist: false,
    }
    this.showExist = this.showExist.bind(this)
  }

  showExist() {
    this.setState({joinExist: !this.state.joinExist})
  }

  renderExistForm() {
    return (
      <Modal
        show={this.state.joinExist}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Create a Room</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.joinExist}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }


  render() {
    return (
      <div className='home'>
        <h1>Simi</h1>
        <Button className='button'>Create New Room</Button>
        <Button className='button' onClick={this.showExist}> Join Existing Room </Button>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default Home;
