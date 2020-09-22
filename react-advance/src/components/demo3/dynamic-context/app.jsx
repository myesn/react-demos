import React from 'react';

import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

/**
 * 动态 Context
 * https://zh-hans.reactjs.org/docs/context.html#dynamic-context
 */

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值(light),
    // 而外部的组件使用默认的 theme 值(dark)
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>witout theme context</ThemedButton>
        </div>
      </div>
    );
  }
}

export default App;
