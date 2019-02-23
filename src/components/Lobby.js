import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import "./lobby.css"
class Lobby extends Component {

  renderUserList() {
    const users = this.props.users
    console.log(users)
    const userList = users.map((user) => {
      return (
        <Card id={user} className='lobby'>
          <Card.Img className='image'variant="left" src="/avatars/avatar1.png"/>
          <Card.Title className='name'> {user}</Card.Title>
          <Card.Title className='score'>10</Card.Title>
        </Card>
      )
    })
    return userList
  }
  render() {
    return (
      <div className="lobby">
        <h2 className="header1"> Waiting for more kakis... </h2>
        {/* THIS IS A COMMENT <Home /> */}
          {this.renderUserList()}
      </div>
    );
  }
}

export default Lobby;
