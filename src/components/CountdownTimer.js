import React, { PropTypes, Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 10,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      if(this.state.sec == 0){this.stop()}
      else{this.setState({sec:this.state.sec - 1})}
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
    this.props.timerComplete();
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{countDown.sec}</strong>
          </span>
        </span>
      </div>
    );
  }
}


export default Countdown;
