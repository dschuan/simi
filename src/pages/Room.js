import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Lobby from '../components/Lobby';
import StartGame from '../components/StartGame';
import UserName from '../components/UserName';

//import Home from './Home'

import './room.css';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      /*
      STATUS: 1 = in lobby, 2 = playing, 3 = gaming
      */
      status: 1
    }
    this.startGame = this.startGame.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }

  componentDidMount() {
    //get user list
    let names = ['A', 'B', 'C']
    //get user name
    const name = sessionStorage.getItem('name')
    this.setState({users: names})
    console.log(name)
    if (!name) {
      this.setState({status: 3})
    } else {
      if (!this.state.users.includes(name)) {
        names.push(name)
        console.log(names)
        this.setState({users : names})
      }
    }
  }

  startGame() {
    //start game
    this.setState({status: 2})
  }

  changeStatus(num) {
    this.setState({status: num});
  }
  chooseRenderComponent() {
    switch(this.state.status) {
      case 1:
        //return lobby
        console.log(this.state.users)
        let users = this.state.users
        const name = sessionStorage.getItem('name')
        if (!this.state.users.includes(name)) {
          users.push(name)
          this.setState({users : users})
        }
        return (
          <div className="parent">
            <Lobby users={this.state.users}/>
            <Button onClick={this.startGame} > Start Game </Button>

          </div>
        )
      case 2:
        //run game
        return <StartGame users={this.state.users} />
      case 3:
        //key in username
        return <UserName changeStatus={this.changeStatus}/>
      default:
        return <p> Error in Loading, refresh the page </p>
    }
  }


  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <h2>{this.props.match.params.id} </h2>
        {this.chooseRenderComponent()}
      </div>
    )
  }
}

export default Room;
