import React from 'react';

/**
 * 状态提升(lifting state up)
 * 组件之间的数据交互
 */
export default class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input2: 0,
    };
  }

  componentDidMount() {
    this.setState({
      input2: this.props.money * 7,
    });
  }

  handleChange = (e) => {
    this.setState({
      input2: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.money * 7}</p>
        <input
          type="text"
          value={this.state.input2}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
