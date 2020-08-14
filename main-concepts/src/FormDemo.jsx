import React from 'react';

export default class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(this.state.value);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
