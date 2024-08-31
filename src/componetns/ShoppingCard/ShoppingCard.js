import React, { useEffect, useState } from 'react';
import './ShoppingCard.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingCard({addToCart, cartItems,removeFromCart}) {
    const [items, setItems] = useState([]);
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            fetch('/data/data.json')
            .then(response => response.json())
            .then(data => {
                setItems(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data', error)
                setLoading(false)
            });
        }, 1000)
       

    }, [])


  return (
<div className="shopping-card">
  <div className="shopping-card__header">
    <h1>Desserts</h1>
  </div>
    {loading ? (
        <div className="loader">
        <div className="loader__spinner"></div>
        <p className='loader__spinner-text'>Loading...</p>
  </div>
  ) : (
    <div className="shopping-card__list">
        {items.map((item) => (
            <ShoppingItem key={item.id} item={item} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>
        ))}

    </div>
  )}
</div>
  )
}

export default ShoppingCard