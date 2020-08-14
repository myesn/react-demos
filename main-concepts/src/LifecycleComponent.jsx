import React from 'react';

/**
 * 生命周期函数(lifycycle methods)：
 * componentWillMount: 在组件被渲染到 DOM 之前运行
 * componentDidMount: 在组件已经被渲染到 DOM 中后运行(挂载 mount)
 * shouldComponentUpdate: 返回 true 和 false, true 代表需要改变，false 代表不需要改变
 * componentWillUpdate: 数据在改变之前运行(state, props)
 * componentDidUpdate: 数据修改完成(state, props)
 * componentWillReceiveProps: props 发生改变后运行
 * componentWillUnmount: 组件卸载前运行(卸载 unmount)
 *
 */
export default class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleUpdateClick = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  handleModifyTitleClick = () => {
    this.props.onModifyTitle(this.props.title, 'title text changed by child');
  };

  render() {
    console.log('render');
    const { count } = this.state;
    return (
      <div>
        lifecycle: {count} - {this.props.title}
        <button onClick={this.handleUpdateClick}>update</button>
        <button onClick={this.handleModifyTitleClick}>
          modify title(child)
        </button>
      </div>
    );
  }
}
