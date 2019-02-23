import React, { Component } from 'react';
//import Home from './Home'

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      
    }
  }
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        {/* THIS IS A COMMENT <Home /> */}
        <p>{this.props.match.params.id} </p>
      </div>
    );
  }
}

export default Room;
