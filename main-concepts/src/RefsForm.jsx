import React from 'react';

export default class RefsForm extends React.Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.usernameRef.current.value, this.passwordRef.current.value);
  };

  render() {
    return (
      <div>
        <div>refs form</div>
        <input type="text" ref={this.usernameRef} />
        <input type="text" ref={this.passwordRef} />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}
