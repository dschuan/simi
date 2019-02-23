import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import './home.css'
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: props.score, // array
    }
    let rows = [];
    for (var i = 0; i < this.state.score.length; i++){
      <tr>
        <td>
      </tr>
    }
    this.showExist = this.showExist.bind(this)
  }

  showExist() {
    this.setState({joinExist: true})
  }


  renderExistForm() {
    return (
      <div>
      </div>
    )
  }
  render() {
    return (
      <div className='home'>
        <h1>SCOREBOARD</h1>
        <table id="scoretable">
          <tbody>
            {rows}
          </tbody>
        </table>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default Scoreboard;
