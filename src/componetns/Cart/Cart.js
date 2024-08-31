import React from 'react'
import './Cart.scss';

function Cart({ cartItems,removeFromCart, onConfirmOrder }) {

    
      const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      };

    return (
      <div className='cart'>
        <div className='cart__main'>
          <h1 className='cart__title'>Your Cart ({cartItems.length})</h1>
          <div className='cart__container'>
            {cartItems.length === 0 ? ( 
              <div className='cart__empty'>
                <img className='cart__empty-image' src='./assets/images/illustration-empty-cart.svg' alt='empty cart' />
                <p className='cart__empty-text'>Your added items will appear here</p> 
              </div>
            ) : (
              <div className='cart__orders'>
                {cartItems.map((item) => (
                  <div className='cart__order' key={item.id}>
                    <div className='cart__details'>
                      <p className='cart__details-name'>{item.name}</p>
                      <div className='cart__price'>
                        <span className='cart__price-amount'>{item.quantity}x</span>
                        <span className='cart__price-single'>@ ${item.price.toFixed(2)}</span> 
                        <span className='cart__price-total'>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button className='cart__delete' onClick={()=> removeFromCart(item.id)}>
                      <img className='cart__delete-img' alt='delete' src='./assets/images/icon-remove-item.svg' />
                    </button>
                  </div>
                ))}
                <div className='cart__total'>
                  <p className='cart__total-text'>Total</p>
                  <span className='cart__total-price'>${calculateTotalPrice(cartItems)}</span>
                </div>
                <div className='cart__neutral'>
                  <img className='cart__neutral-img' alt='neutral' src='./assets/images/icon-carbon-neutral.svg' /> 
                  <p className='cart__neutral-text'>This is <span>carbon neutral</span> delivery</p>
                </div>
                <button className='cart__button' onClick={onConfirmOrder}>Confirm order</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;