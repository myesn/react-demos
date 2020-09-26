import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';
import routers from './routers';
import NavigationBar from './components/NavigationBar';
import Messages from './components/shared/alert/Messages';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Messages />
        {routers}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
