import React from 'react';

/**
 * 组合 VS 继承（composition vs inheritance）
 * 推荐使用组合而非及继承来实现组件间的代码重用
 */
export default class Compose extends React.Component {
  render() {
    return (
        <div>
            compose:{this.props.children}
        </div>
    );
  }
}
