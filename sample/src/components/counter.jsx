import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Method to increment counter
  incrementCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Click Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCounter}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ClickCounter;