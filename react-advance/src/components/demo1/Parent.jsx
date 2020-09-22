import React from 'react';

import Child from './Child';

/**
 * 计数例子
 *
 * 定时器、网络请求、事件监听 在组件被销毁前都应取消所有订阅和异步任务。
 */

const myApi = {
  count: 0,
  intervalId: null,
  subscribe(callback) {
    this.intervalId = setInterval(() => {
      this.count += 1;
      callback(this.count);
    }, 1000);
  },
  unsubscribe() {
    clearInterval(this.intervalId);
    this.reset();
  },
  reset() {
    this.count = 0;
  },
};

export default class Parent extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    myApi.subscribe((currentCount) => {
      this.setState({
        count: currentCount,
      });
    });
  }

  componentWillUnmount() {
    myApi.unsubscribe();
  }

  render() {
    console.log('parent rendered');
    return (
      <div>
        parent: {this.state.count}
        <Child count={1} />
      </div>
    );
  }
}
