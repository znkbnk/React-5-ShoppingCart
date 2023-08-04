// Item.js

import React from "react";

const Item = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className='item'>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Item;
