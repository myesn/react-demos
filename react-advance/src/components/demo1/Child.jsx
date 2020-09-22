import React from 'react';

/**
 * 关于渲染的问题:
 *  如果组件的 props 或 state 没有发生变化，就不应该被重新 render，需要通过以下或其他方式来进行数据对比，确保有必要重新 render，
 *  因为 DOM 操作比 JS 操作更加费时，所以需要考虑性能优化
 * 
 * shouldComponentUpdate:
 *   https://zh-hans.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation
 * 
 * PureComponent:
 *   https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent
 * 
 * 
 * 注意
 * React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。
 * 如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
 * 仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
 * 你也可以考虑使用 immutable 对象加速嵌套数据的比较。
 * 
 * 此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。
 */
// 
// 
export default class Child extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.count !== nextProps.count) {
  //     return true;
  //   }

  //   return false;
  // }

  render() {
    console.log('child rendered');

    return <div>child:{this.props.count}</div>;
  }
}
