import React, { PureComponent, createRef } from 'react';

/**
 * 监听页面滚动事件
 */

class LoadMore extends PureComponent {
  constructor() {
    super();

    this.loadRef = createRef();
  }

  state = {};

  componentDidMount() {
    let timer = null;
    const clientHeight = document.documentElement.clientHeight;
    const { onLoadMore } = this.props;

    window.onscroll = (e) => {
      // 这里是防抖，无限延后(节流是规定时间内只执行一次)
      if (timer) {
        clearTimeout(timer);
      }

      // 防抖
      timer = setTimeout(() => {
        const { current } = this.loadRef;
        if (!current) return;

        const rect = current.getBoundingClientRect(); // 可以获取当前元素距离文档顶部的偏移量
        if (rect && rect.top < clientHeight) {
          onLoadMore && onLoadMore();
        }
      }, 300);
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return <div ref={this.loadRef}>加载更多</div>;
  }
}

export default LoadMore;
