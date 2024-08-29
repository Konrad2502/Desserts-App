import React, { useState } from 'react';
import './Container';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import Cart from '../Cart/Cart';

function Container() {

  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
  
      if (existingItem) {
        const updatedItems = prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...item, quantity: 1 }];
        return newItems;
      }
    });
  };
  
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === id);
      if (existingItem.quantity === 1) {
        const filteredItems = prevItems.filter(cartItem => cartItem.id !== id);
        return filteredItems;
      } else {
        const updatedItems = prevItems.map(cartItem =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return updatedItems;
      }
    });
  };
  return (
    <div className='container'>,
        <ShoppingCard addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}/>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default Container;