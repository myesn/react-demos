import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import App from '../pages/App';
import Home from '../pages/Home';
import Life from '../pages/Life';
import Shop from '../pages/Shop';
import Mine from '../pages/Mine';
import City from '../pages/City';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';

import withNavigation from '../components/HOC/withNavigation';

class Router extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <App path='/'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home'/>
            </Route>
            <Route path='/home' component={withNavigation(Home)}/>
            <Route path='/life' component={withNavigation(Life)}/>
            <Route path='/shop' component={withNavigation(Shop)}/>
            <Route path='/mine' component={withNavigation(Mine)}/>
            <Route path='/city' component={City}/>
            <Route path='/search' component={Search}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Router;
