import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

/**
 * 状态提升(lifting state up)
 * 组件之间的数据交互
 */
export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 1,
    };
  }

  handleChange = (e) => {
    this.setState({
      money: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.money}
          onChange={this.handleChange}
        />
        <p>parent</p>
        人民币: <Child1 money={this.state.money} />
        美元: <Child2 money={this.state.money} />
      </div>
    );
  }
}
