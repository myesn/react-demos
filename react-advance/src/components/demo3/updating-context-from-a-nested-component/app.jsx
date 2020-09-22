import React from 'react';

import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';


/**
 * 在嵌套组件中更新 Context：
 * 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context：
 * 
 * https://zh-hans.reactjs.org/docs/context.html#updating-context-from-a-nested-component
 */

function Content() {
  return (
    <>
      <ThemeTogglerButton />
    </>
  );
}

class App extends React.Component {
  // 这个函数因为是字段，所以需要在使用之前声明，否则其他地方获取到的值为 void 0
  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  // state 也包含了更新函数，因此它会被传递进 context provider
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,
  };

  render() {
    // 整个 state 都被传递进 context provider
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
