import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    // Start interval when component mounts
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval when component unmounts
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>Current Time:</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;