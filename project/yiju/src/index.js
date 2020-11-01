import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './router';
import configureStore from './store';

import './utils/mock';
// import axios from 'axios';
// axios.get('/api/hotdata').then((res) => {
//   console.log(res);
// });

import 'zarm/dist/zarm.min.css';
import './index.scss';
// import './assets/css/icomoon.css';
// import './assets/css/iconfont.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
