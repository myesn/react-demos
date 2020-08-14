import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // 由于 ant design 目前使用了一些过时的语法，使用严格模式会报错，这里只能暂时注释掉
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);