import React from 'react';

interface CartItemProps  {
  item: string;
};

export default function Cart() {
  let bag = ['Tomato', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {bag.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
    
  );
}


function CartItem({ item }: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}