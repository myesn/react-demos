import React from 'react';

/**
 * 状态提升(lifting state up)
 * 组件之间的数据交互
 */
export default class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: 0,
    };
  }

  componentDidMount() {
    this.setState({
      input1: this.props.money,
    });
  }

  handleChange = (e) => {
    this.setState({
      input1: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.money}</p>
        <input
          type="text"
          value={this.state.input1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
