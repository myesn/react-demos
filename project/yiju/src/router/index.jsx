import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Life from '../pages/Life';
import Shop from '../pages/Shop';
import Mine from '../pages/Mine';
import NotFound from '../pages/NotFound';
import withNavigation from '../components/HOC/withNavigation';

class Router extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={withNavigation(Home)} />
          <Route path='/life' component={withNavigation(Life)} />
          <Route path='/shop' component={withNavigation(Shop)} />
          <Route path='/mine' component={withNavigation(Mine)} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
