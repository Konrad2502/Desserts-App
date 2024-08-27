import React, { useState } from 'react';
import './Container';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import Cart from '../Cart/Cart';

function Container() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
     return [...prevItems,item]
    })
  }
  const removeFromCart = (id) => {
    console.log(id)
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
  }
  return (
    <div className='container'>,
        <ShoppingCard addToCart={addToCart} removeFromCart={removeFromCart}/>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default Container;