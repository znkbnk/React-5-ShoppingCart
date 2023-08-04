//Item.js

import React from 'react';

const Item = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onIncrement(item)}>Increment</button>
      <button onClick={() => onDecrement(item)}>Decrement</button>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default Item;
