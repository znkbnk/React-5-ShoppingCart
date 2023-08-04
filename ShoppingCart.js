//ShoppingCart.js

import React, { useState } from 'react';
import Item from './Item';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    // Add more items as needed
  ]);

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedItems);
  };

  const handleIncrementItem = (itemToIncrement) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemToIncrement.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleDecrementItem = (itemToDecrement) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemToDecrement.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {cartItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={handleRemoveItem}
          onIncrement={handleIncrementItem}
          onDecrement={handleDecrementItem}
        />
      ))}
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
