import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Products from './Products';
import Sales from './Sales';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/sales'>
          <Sales />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default Main;
