import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home Page </p>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default Home;
