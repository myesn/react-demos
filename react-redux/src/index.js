import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
// import reducer from './reducers/counter';
import rootRuducer from './reducers';

// 中间件
// const logger = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.log('dispatch -> ', action);

//   // 执行下一个中间件
//   let result = next(action);

//   console.log('next state -> ', store.getState());
//   console.groupEnd();

//   return result;
// };

// const crashReporter = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch (e) {
//     console.group('crashReporter');
//     console.error('error -> ', e);
//     console.groupEnd();
//   }
// };

// 创建 store 仓库
const store = createStore(rootRuducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

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
