import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   ReactDOM.render(
//     <React.StrictMode>
//       {element}
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// https://www.heissenberger.at/en/blog/react-components-reder-twice/
// React.StrictMode 会导致执行两次 shouldComponentUpdate 声明周期函数，两次 render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);