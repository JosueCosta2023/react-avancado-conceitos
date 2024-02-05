import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render');
    return (
      <div>
        <h2>Contador: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
