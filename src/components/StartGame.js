import React, { Component } from 'react';

import ChooseGM from './ChooseGM';

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 0, gm: ''}
    this.changeStatus = this.changeStatus.bind(this);
    this.changeGM = this.changeGM.bind(this);
  }
  changeStatus(num, gm) {
    this.setState({status: num})
  }
  changeGM(gm) {
    this.setState({gm: gm})
  }
  renderMain() {
    switch(this.state.status) {
      case 0:
        return <ChooseGM users={this.props.users} changeStatus={this.changeStatus} changeGM={this.changeGM}/>
      case 1:
        return <p> Case 1, {this.state.gm} </p>
      default:
        return <p>Nothing</p>
    }
  }
  render() {
    //sessionStorage.clear()
    return (
      <div> {this.renderMain()}</div>
    );
  }
}

export default StartGame;
