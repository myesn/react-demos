import React from 'react';
import ReactDOM from 'react-dom';

import 'zarm/dist/zarm.min.css';
import './index.scss';
import './assets/css/icomoon.css';
import './assets/css/iconfont.css';

import Router from './router';

import './utils/mock';

// import axios from 'axios';
// axios.get('/api/hotdata').then((res) => {
//   console.log(res);
// });

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
