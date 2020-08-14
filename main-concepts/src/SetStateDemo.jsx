import React from 'react';

export default class SetStateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleModifyClick = () => {    
    this.setState(
      (state) => ({
        count: state.count + 1,
      }),
      () => {
        // 因为 setSet 是异步方法，通过它提供的回调函数可以实时获取到 state 变化之后的值
        // 当前也可以使用 es6 的 Promise 和 async await 语法来实现同步的方法
        // 但是当前的函数就只能声明为普通函数（而不是箭头函数），在 jsx 里面的 onClick
        // 事件绑定也需要改为 this.handleModifyClick.bind(this)
        console.log(this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        setState 同步/异步
        <p>{this.state.count}</p>
        <button onClick={this.handleModifyClick}>modify</button>
      </div>
    );
  }
}
