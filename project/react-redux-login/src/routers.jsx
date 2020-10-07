import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/App';
import SignUp from './components/signup/Index';
import SignIn from './components/signin/Index';
import UserList from './components/user/List';

import RequireAuthorization from './components/shared/RequireAuthorization';

export default (
  <div className='container'>
    <Switch>
      <Route exact strict path='/' component={Home} />
      <Route exact strict path='/signup' component={SignUp} />
      <Route exact strict path='/signin' component={SignIn} />
      <Route
        exact
        strict
        path='/user/list'
        component={RequireAuthorization(UserList)}
      />
    </Switch>
  </div>
);
