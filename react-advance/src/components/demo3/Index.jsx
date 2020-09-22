import React, { createContext } from 'react';

/**
 * Context:
 *  Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
 *
 * 何时使用 Context
 * Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
 *
 * https://zh-hans.reactjs.org/docs/context.html
 *
 * 注意：
 *  这只是一个演示 context 的例子，实际情况这里使用组合会更好
 *  https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#containment
 */

const IndexContext = createContext({
  color: 'red',
});

const Topic = () => {
  return (
    <>
      <Comment />
    </>
  );
};

const Comment = () => {
  return (
    <IndexContext.Consumer>
      {({ color }) => <p>{color}</p>}
    </IndexContext.Consumer>
  );
};

export default class Index extends React.Component {
  // https://zh-hans.reactjs.org/docs/context.html#caveats
  // 防止陷阱，需要把 provder 的 value 存在 state 里面
  // 这样做的意义在于，当 Index 组件重渲染时，如果 provider 的 value 没有改变，就不会重渲染下面的 consumers 组件，否则可能会
  state = {
    value: {
      color: 'black',
    },
  };

  render() {
    return (
      <div>
        <IndexContext.Provider value={this.state.value}>
          <Topic />
        </IndexContext.Provider>
        <Topic />
      </div>
    );
  }
}
