import React from 'react';
import Child from './Child';

export default class Parent extends React.Component {
  state = {
    value: '',
  };

  handleClick = (data) => {
    this.setState({
      value: data,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        Parent: {value}
        <Child title='sub title' onMyEvent={this.handleClick} />
      </div>
    );
  }
}
