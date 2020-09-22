import React, { Fragment } from 'react';

/**
 * React.Fragment:
 *   React Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素  
 * 
 * https://zh-hans.reactjs.org/docs/react-api.html#reactfragment
 * 
 */
class Item extends React.Component {
  render() {
    return (
      <Fragment>
        <li>demo2 item</li>
        <li>demo2 item</li>
      </Fragment>
    );
  }
}

class Item2 extends React.Component {
  render() {
    return (
      <>
        <li>demo2 item</li>
        <li>demo2 item</li>
      </>
    );
  }
}

export default class Index extends React.Component {
  render() {
    return (
      <ul>
        <Item />
        <Item2 />
      </ul>
    );
  }
}
