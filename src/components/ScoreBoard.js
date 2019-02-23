import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './scoreboard.css'

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: [["Desheng", 15],["Caleb", 10], ["Yongkeat", 10], ["Adna", 10]],// props.score, // array
    }

  }

  render() {
    let rows = [];
    for (var i = 0; i < this.state.score.length; i++){
      rows.push(
        <tr className="scoreboardrow">
          {i==0 ? <td id="iconcell"><img id="winnericon" src="/apruss.png"/></td> : <td id="iconcell"></td>}
          <td className="namecell">{this.state.score[i][0]}</td>
          <td className="scorecell">{this.state.score[i][1]}</td>
        </tr>
      )
    }
    return (

      <div className='home'>
        <h1 id="scoreboardh1" className="white">SCOREBOARD</h1>
        <h5 className="center white">let's see how zai you are</h5>
        <table className="center">
          <tbody>
            {rows}
          </tbody>
        </table>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default ScoreBoard;
