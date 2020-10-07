import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';
import Routers from './Routers';
import NavigationBar from './components/NavigationBar';
import Messages from './components/shared/alert/Messages';
import ErrorBoundary from './components/shared/ErrorBoundary';

import { setLoggedInUser } from './actions/signin';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// 刷新页面之后需要从 localstorage 中解析出 token
store.dispatch(setLoggedInUser());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <ErrorBoundary>
          <Messages />
        </ErrorBoundary>
        {Routers}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
