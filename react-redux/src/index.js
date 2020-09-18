import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
// import reducer from './reducers/counter';
import rootRuducer from './reducers'

// 创建 store 仓库
const store = createStore(rootRuducer);

// 订阅 state 变化
// const unsubscribe = store.subscribe(() => {
//   render();
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
