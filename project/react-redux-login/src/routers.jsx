import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import SignUpPage from './components/signup/Index';

export default (
  <div className='container'>
    <Route exact strict path='/' component={App} />
    <Route exact strict path='/signup' component={SignUpPage} />
  </div>
);
