import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, ToggleButton} from 'react-bootstrap';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinExist: false,
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
      <div className='choose'>
        <h1>What would derp say when asking a girl out?</h1>
        <ButtonGroup toggle>
          <ToggleButton type="checkbox">
          Answer 1
          </ToggleButton>
        </ButtonGroup>
        <Button className='button'>Answer 1</Button>
        <Button className='button'>Answer 2 </Button>
        <Link to='/room'> This is the link to the room </Link>
      </div>
    );
  }
}

export default Choose;
