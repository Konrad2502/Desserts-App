import React, { useEffect, useState } from 'react';
import './ShoppingCard.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingCard({addToCart}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data/data.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data', error));

    }, [])


  return (
<div className="shopping-card">
  <div className="shopping-card__header">
    <h1>Dessert</h1>
  </div>
  <div className="shopping-card__list">
    {items.map((item) => (
        <ShoppingItem key={item.id} item={item} addToCart={addToCart}/>
    ))}

  </div>
</div>
  )
}

export default ShoppingCard