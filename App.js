// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 20, quantity: 2 },
    // Add more items as needed
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleIncrementItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Router>
      <div className='app-container'>
        <h1>Shopping Cart App</h1>
        <nav>
          <ul className='nav-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path='/'
            element={
              <ShoppingCart
                cartItems={cartItems}
                onRemove={handleRemoveItem}
                onIncrement={handleIncrementItem}
                onDecrement={handleDecrementItem}
              />
            }
          />
          <Route
            path='/checkout'
            element={
              <Checkout
                cartItems={cartItems}
                totalPrice={calculateTotalPrice()}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
