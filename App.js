//App.js

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Shopping Cart App</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
