import React, { Component } from 'react';

import ChooseGM from './ChooseGM';
import InputParent from './InputParent';
import AfterAnswer from './AfterAnswer';
import Choose from './Choose';

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
        return <InputParent changeStatus={this.changeStatus} gm={this.state.gm} />
      case 2:
        return <AfterAnswer changeStatus={this.changeStatus} />
      case 3:
        return <Choose changeStatus={this.changeStatus}/>
      case 4:
        return <p>4</p>
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
