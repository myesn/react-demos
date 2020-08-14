import React from 'react';

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      flag: true,
    };
  }

  increment = () => {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - 1,
    }));
  };

  toggleFlag = () => {
    this.setState((state) => ({
      flag: !state.flag,
    }));
  };

  render() {
    let showView = this.state.flag ? 'true' : 'false';
    return (
      <div>
        <h3>state</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>add</button>
        <button onClick={this.decrement}>remove</button>
        <p>flag: {showView}</p>
        <button onClick={this.toggleFlag}>toggle flag</button>
      </div>
    );
  }
}
