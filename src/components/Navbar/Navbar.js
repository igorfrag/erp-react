import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Sales from '../../pages/Sales';
import Products from '../../pages/Products';
import './Navbar.css';

export default function Routes() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/sales'>Sales</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>LOGO</li>
          </ul>
        </nav>

        <Switch>
          <Route path='/sales'>
            <Sales />
          </Route>
          <Route path='/Products'>
            <Products />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
