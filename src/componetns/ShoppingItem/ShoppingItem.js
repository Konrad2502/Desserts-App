import React, { useEffect, useState } from 'react';
import './ShoppingItem.scss';

function ShoppingItem({ item, addToCart, cartItems, removeFromCart }) {
    
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true)
        },100)
    })
  

    return (
      <div className={`shopping-card__item ${isShown ? 'visible': ''}`}>
        <div className="shopping-card__item-picture">
          <img
            className={cartItem ? 'border' : 'shopping-card__item-image'}      
            alt={item.name}
            src={item.image.desktop} 
          />
        </div>
        {cartItem ? (
        <button
          className="shopping-card__item-btn shopping-card__item-btn--quantity"
        >
          <img src='./assets/images/icon-decrement-quantity.svg' alt='decrement' onClick={() => removeFromCart(item.id)}/>
          <span>{cartItem.quantity}</span> 
          <img src='./assets/images/icon-increment-quantity.svg' alt='increment'  onClick={() => addToCart(item)}/>
        </button>
      ) : (
        <button
          className="shopping-card__item-btn"
          onClick={() => addToCart(item)}
        >
          <img src="./assets/images/icon-add-to-cart.svg" alt="Add to basket" />
          <p>Add to basket</p>
        </button>
      )}

        <div className="shopping-card__item-description">
          <div className="shopping-card__item-category">
            <p>{item.category}</p>
          </div>
          <div className="shopping-card__item-name">
            <p>{item.name}</p>
          </div>
          <div className="shopping-card__item-price">
            <p>${item.price.toFixed(2)}</p>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default ShoppingItem;