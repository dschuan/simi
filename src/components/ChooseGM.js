import React, { Component } from 'react';
import gm from '../assets/gm.gif';


import './choose.css';
class ChooseGM extends Component {
  constructor(props) {
    super(props);
    this.state = {users: this.props.users, gm: this.props.users[0]}
  }

  componentDidMount() {
    this.setState({gm: this.state.users[0]})
  }

  changeStatus() {
    setTimeout(() => {
      this.props.changeStatus(1)
      this.props.changeGM(this.state.gm)
    }, 3000)
  }
  render() {
    return (
      <div className="choose">
        <h1 className="header1">{this.state.gm}</h1>
        <p className="center"> is the dailou this round!</p>
        <img className="gif" src={gm}/>
        {this.changeStatus()}
      </div>
    );
  }
}

export default ChooseGM;
