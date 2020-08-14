import React from 'react';

/**
 * 几个使用使用 refs 的情况：
 * 1. 管理焦点，文本选择或媒体播放
 * 2. 触发强制动画
 * 3. 集成第三方 DOM 库
 *
 * 避免使用 refs 来做任何可以通过声明式实现来完成的事情
 */
export default class RefsAndDOM extends React.Component {
  constructor() {
    super();
    this.divRef = React.createRef();
  }

  componentDidMount() {
    this.divRef.current.style.color = 'red';
  }

  render() {
    return (
      <div>
        refs and dom
        <div ref={this.divRef}>Hello</div>
      </div>
    );
  }
}
