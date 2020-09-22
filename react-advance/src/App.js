import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Parent from './components/demo1/Parent';
import Home from './components/Home'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ Home}></Route>
        <Route path="/demo1" component={ Parent}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
