import React from 'react';

/**
 * 由于这是一个包裹组件（类似 try catch 的作用）
 * 首先先渲染 this.props.children ，然后 chilren 里面发生错误，
 * 那么这个包裹组件的 componentDidCatch() 生命周期函数就会被触发，
 * 然后这里面再 setState -> hasError -> true, 就又会重渲染，
 * 最后就进入到了 render prop 函数里（外界传入的一个 prop 函数），
 * render prop 在 react 官网中也有专门的讲解
 *
 * error boundaries: https://zh-hans.reactjs.org/docs/error-boundaries.html
 * render props: https://zh-hans.reactjs.org/docs/render-props.html
 *
 * 注意
 * 错误边界无法捕获以下场景中产生的错误：
 * 事件处理（了解更多）
 * 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
 * 服务端渲染
 * 它自身抛出来的错误（并非它的子组件）
 */
export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };

  // 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
  // 这个必须声明为 static 静态方法，因为源码里面是从当前 component.type 里面读取的，而不是 component instance
  // static in react: https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993
  // https://stackoverflow.com/a/55544775/7712266
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: ', error);
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  /**
   * https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch
   * @param {*} error  抛出的错误
   * @param {*} errorInfo 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
   */
  componentDidCatch(error, errorInfo) {
    //  注意
    // 如果发生错误，你可以通过调用 setState 使用 componentDidCatch() 渲染降级 UI，
    // 但在未来的版本中将不推荐这样做。 可以使用静态 getDerivedStateFromError() 来处理降级渲染。
    // https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch
    // this.setState({
    //   hasError: true,
    //   error: error,
    //   errorInfo: errorInfo,
    // });

    console.log('componentDidCatch: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log('render children error');
      // 其实这里也没有必要把错误的显示方式交给外部，因为一般来说这种都是公用组件，
      // 其他组件那么多，每个都要自己处理，那就太蠢了，这里只是为了演示功能点
      return <div>{this.props.render(this.state.error)}</div>;
    }

    console.log('render children');
    return this.props.children;
  }
}
