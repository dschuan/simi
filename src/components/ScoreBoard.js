import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import './scoreboard.css'

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: [["Desheng", 15],["Caleb", 10], ["Yongkeat", 10], ["Adna", 10]],// props.score, // array
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.props.changeGM('');
    this.props.changeStatus(0);
  }
  render() {
    let rows = [];
    for (var i = 0; i < this.state.score.length; i++){
      rows.push(
        <Card className='card'>
          <Card.Img className='image'variant="left" src="/avatars/avatar1.png"/>
          <Card.Title className='name'> {this.state.score[i][0]} </Card.Title>
          <Card.Title className='score'>{this.state.score[i][1]}</Card.Title>
        </Card>

      )
    }
    return (

      <div className='scoreboard'>
        <h1 id="scoreboardh1" className="white">SCOREBOARD</h1>
        <h5 id="subtitle" className="center white">Come see how zai you are</h5>
          {rows}
        <Button id="nextroundbtn" onClick={this.clickHandler}> Next Round </Button>
        <Link id="quitbtn" className="center" to="/"> Quit </Link>
      </div>
    );
  }
}

export default ScoreBoard;
