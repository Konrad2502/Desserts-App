import React, { useState } from 'react';
import './Container';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import Cart from '../Cart/Cart';
import PopupCart from '../PopupCart/PopupCart';

function Container() {

  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setIsVisble] = useState(false);
  
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

  const resetCart = () => {
    setCartItems([])
    setIsVisble(false);
  }
  return (
    <>
    <div className='container'>,
        <ShoppingCard addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}/>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} onConfirmOrder={() => setIsVisble(true)}/>
    </div>
    <PopupCart cartItems={cartItems} resetCart={resetCart} isVisible={isVisible}/>
    </>
  )
}

export default Container;