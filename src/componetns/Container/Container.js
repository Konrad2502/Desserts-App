import React from 'react';
import './Container';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import Cart from '../Cart/Cart';

function Container(props) {
  return (
    <div className='container'>
        <ShoppingCard/>
        <Cart/>
    </div>
  )
}

export default Container;