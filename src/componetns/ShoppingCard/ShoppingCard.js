import React, { useEffect, useState } from 'react';
import './ShoppingCard.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingCard({addToCart, cartItems,removeFromCart, activeIndex, setActiveIndex}) {
    const [items, setItems] = useState([]);
    const [loading , setLoading] = useState(true);
  
    console.log(items)
  
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
    
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (items.length === 0) return;
    
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        } else if (e.key === 'Enter') {
          addToCart(items[activeIndex]);
        } else if (e.key === 'Tab') {
          e.preventDefault();
          document.querySelector('.cart__button').focus();
        }
      };
    
      window.addEventListener('keydown', handleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [items, activeIndex, addToCart, setActiveIndex])
  
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
        {items.map((item,index) => (
            <ShoppingItem 
            key={item.id} 
            item={item} 
            addToCart={addToCart} 
            cartItems={cartItems} 
            removeFromCart={removeFromCart}
            isActive={index === activeIndex}
            />
        ))}

    </div>
  )}
</div>
  )
}

export default ShoppingCard