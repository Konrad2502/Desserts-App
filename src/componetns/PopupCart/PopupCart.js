import { useEffect,useCallback } from 'react';

import './PopupCart.scss';

import React from 'react'

function PopupCart({ cartItems, resetCart, isVisible,setActiveIndex }) {

    // Obliczanie całkowitej ceny zamówienia
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

     // Memoizacja funkcji resetCart
     const memoizedResetCart = useCallback(() => {
      resetCart();
      setActiveIndex(0);
  }, [resetCart, setActiveIndex]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === ' ' && isVisible) {
      memoizedResetCart();
      e.preventDefault();
      document.querySelector('.shopping-card__item').focus();
    }
  }, [isVisible, memoizedResetCart]);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, handleKeyDown]);
    return (
        <>
{isVisible && <div className="overlay"></div>}
      <div className={`popUp ${isVisible ? 'popUp--visible' : ''}`} >
        <div className='popUp__icon'>
          <img src='./assets/images/icon-order-confirmed.svg' alt='icon-confirmed' />
        </div>
        <div className='popUp__name'>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className='popUp__items'>
          {cartItems.map((item) => (
            <div className='popUp__item' key={item.id}>
              <div className='popUp__content'>
                <img className='popUp__content-img' src={item.image.desktop} alt='popup-img' />
                <div className='popUp__content-txt'>
                  <p>{item.name}</p>
                  <div className='popUp__amount'>
                    <span className='popUp__amount-quantity'>{item.quantity}x</span>
                    <span className='popUp__amount-price'>@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className='popUp__item-totalPrice'>
                ${ (item.price * item.quantity).toFixed(2) } {/* Obliczenie i wyświetlenie ceny za item */}
              </div>
            </div>
          ))}
        </div>
        <div className='popUp__total'>
          <p>Order Total</p>
          <span>
            ${totalPrice}
          </span>
        </div>
        <button className='popUp__button' onClick={resetCart} onKeyDown={handleKeyDown} >Start New Order</button>
      </div>
      </>
    );
  }
  
  
  export default PopupCart;