import { createContext } from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// 确保传递给 createContext 的默认值数据结构是调用的组件(comsumers)所能匹配的!

// 其实这里并不需要提供默认值，因为在 app 组件中已经把自身的 state 传递给了 provider，
// 里面的数据结构刚好是和这里匹配的
export const ThemeContext = createContext();

// context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容。
ThemeContext.displayName = 'ThemeContext';
