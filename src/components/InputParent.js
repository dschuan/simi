import React, { Component } from 'react';
import GmInputText from './GmInputText';
import GmInputAudio from './GmInputAudio';


class InputParent extends Component {

  constructor(props){
    super(props)
    this.state = {user: sessionStorage.getItem('name'), showAudio: false}
    this.changeAudio = this.changeAudio.bind(this)
  }

  changeAudio(bool) {
    this.setState({showAudio: bool})
  }

  GmAnswer() {
    if (this.state.showAudio) {
      return <GmInputAudio changeStatus={this.props.changeStatus}/>
    } else {
      return <GmInputText changeAudio={this.changeAudio} changeStatus={this.props.changeStatus} isGm={true} gm={this.props.gm} />
    }
  }
  renderMain() {
    console.log(this.state.user)
    console.log(this.props.gm)
    const user = this.state.user
    if (user === this.props.gm) {
      return <div>{this.GmAnswer()}</div>

    } else {
      return (<GmInputText changeStatus={this.props.changeStatus} isGm={false} gm={this.props.gm} />)
    }
  }
  render() {
    return (
      <div>
        {this.renderMain()}
      </div>
    );
  }
}

export default InputParent;
