import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Sales from '../pages/Sales';

function Router() {
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

export default Router;
