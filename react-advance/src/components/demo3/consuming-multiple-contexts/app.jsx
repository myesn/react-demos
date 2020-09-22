import React, { createContext } from 'react';

/**
 * 消费多个 Context：
 * 为了确保 context 快速进行重渲染，React 需要使每一个 consumers 组件在组件树中成为一个单独的节点
 *
 * 如果两个或者更多的 context 值经常被一起使用，那你可能要考虑一下另外创建你自己的渲染组件，以提供这些值。
 * https://zh-hans.reactjs.org/docs/context.html#consuming-multiple-contexts
 */

const ThemeContext = createContext();
const UserContext = createContext();

class App extends React.Component {
  state = {
    theme: 'light',
    signedInUser: 'myesn',
  };
  render() {
    const { signedInUser, theme } = this.state;

    // 提供初始 context 值的 App组件
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

function Layout() {
  return (
    <>
      <Content />
    </>
  );
}

// 一个组件可能会消费多个 context
function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(user) => (
            <>
              <p>theme: {theme}</p>
              <p>signed In User: {user}</p>
            </>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
