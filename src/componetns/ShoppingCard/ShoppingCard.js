import React from 'react';
import './ShoppingCard.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingCard() {
  return (
<div className="shopping-card">
  <div className="shopping-card__header">
    <h1>Dessert</h1>
  </div>
 <ShoppingItem/>
</div>
  )
}

export default ShoppingCard