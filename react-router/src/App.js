import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import Mine from './pages/Mine';
import UCenter from './pages/UCenter';
import Demo from './pages/demo';
import Shop from './pages/Shop';
import NotFound from './pages/NotFount';

class App extends React.Component {
  state = {
    isLogin: false,
  };

  handleLoginClick = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/*  
            精准匹配(Switch + strict + exact 可以做到完全匹配包括末尾 / 符号，并只匹配一个组件)
            exact 忽略结尾 / 符号
            strict 完全匹配包括末尾 / 符号，当值为 true, exact 的值也必须为 true
           */}
            <Route exact strict path="/mine" component={Mine}></Route>
            <Redirect from="/hellomine" to="/mine"></Redirect>
            <Route
              exact
              strict
              path="/mine/ucenter/:id?/:name?"
              component={UCenter}></Route>
            <Route
              path="/demo"
              render={(routeProps) => (
                <Demo {...routeProps} name="name" />
              )}></Route>
            <Route
              path="/shop"
              render={(routerProps) => (
                <Shop {...routerProps} isLogin={this.state.isLogin} />
              )}></Route>
            <Route component={NotFound} />
          </Switch>
        </Router>

        <button onClick={this.handleLoginClick}>
          {this.state.isLogin ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}

export default App;
