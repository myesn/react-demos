import React from 'react';

export default class Child extends React.Component {
  handleClick = () => {
    this.props.onMyEvent('parent title');
  };

  render() {
    return (
      <div>
        Child: {this.props.title}
        <button onClick={this.handleClick}>transfer data</button>
      </div>
    );
  }
}
