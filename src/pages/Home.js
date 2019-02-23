import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinExist: false,
    }
    this.showExist = this.showExist.bind(this)
  }

  showExist() {
    this.setState({joinExist: true})
  }

  renderExistForm() {
    return (
      <div>

      </div>
    )
  }
  render() {
    return (
      <div className='home'>
        <h1>Simi</h1>
        <Button>Create New Lobby</Button>
        <Button onClick={this.showExist}> Join Existing Lobby </Button>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default Home;
