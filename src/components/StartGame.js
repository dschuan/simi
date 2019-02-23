import React, { Component } from 'react';

import ChooseGM from './ChooseGM';
import InputParent from './InputParent';
import AfterAnswer from './AfterAnswer';
import Choose from './Choose';
import Answer from './Answer';
import ScoreBoard from './ScoreBoard';

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
    console.log(gm)
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
        return <Choose changeStatus={this.changeStatus} gm={this.state.gm}/>
      case 4:
        return <Answer changeStatus={this.changeStatus} gm={this.state.gm}/>
      case 5:
        return <ScoreBoard changeStatus={this.changeStatus} changeGM={this.changeGM} />
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
