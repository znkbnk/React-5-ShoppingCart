// Checkout.js

import React from "react";

const Checkout = ({ cartItems, totalPrice }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>Cart is empty or state data is missing.</div>;
  }

  return (
    <div className='checkout-container'>
      <h2>Checkout</h2>
      <div>
        {cartItems.map((item) => (
          <div className='checkout-item' key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.quantity}
            </p>
          </div>
        ))}
        <p className='checkout-total'>Total Price: ${totalPrice}</p>
       </div>
    </div>
  );
};

export default Checkout;
