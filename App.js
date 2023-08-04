//App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Shopping Cart App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
