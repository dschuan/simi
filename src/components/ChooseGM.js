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
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>{this.state.gm}</h1>
        <p> is the GM!</p>
        <img className="gif" src={gm}/>
        {this.changeStatus()}
      </div>
    );
  }
}

export default ChooseGM;
