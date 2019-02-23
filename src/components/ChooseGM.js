import React, { Component } from 'react';



class ChooseGM extends Component {
  constructor(props) {
    super(props);
    this.state = {users: this.props.users, gm: ''}
  }

  componentDidMount() {
    this.setState({gm: this.state.users[0]})
  }

  changeStatus() {
    setTimeout(() => {
      this.props.changeStatus(1)
      this.props.changeGM(this.state.gm)
    }, 2000)
  }
  render() {
    return (
      <div>
        <h1>{this.state.gm}</h1>
        <p> is the GM!</p>
        {this.changeStatus()}
      </div>
    );
  }
}

export default ChooseGM;
