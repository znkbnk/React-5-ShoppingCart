// ShoppingCart.js

import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ShoppingCart = ({ cartItems, onRemove, onIncrement, onDecrement }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      {cartItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={() => onRemove(item.id)}
          onIncrement={() => onIncrement(item.id)}
          onDecrement={() => onDecrement(item.id)}
        />
      ))}
      <p className='total-price'>Total Price: ${calculateTotalPrice()}</p>
      <Link
        to={{
          pathname: "/checkout",
          state: { cartItems, totalPrice: calculateTotalPrice() },
        }}
      >
        <button className='checkout-button'>Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
