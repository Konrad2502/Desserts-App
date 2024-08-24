import React from 'react'

function ShoppingItem() {
  return (
<div className="shopping-card__list">
    <div className="shopping-card__item">
      <div className="shopping-card__item-picture">
        <img className="shopping-card__item-image" alt="img" src="./assets/images/image-creme-brulee-desktop.jpg" />
      </div>
      <div className="shopping-card__item-button">
        <button className="shopping-card__btn">
          <img src="./assets/images/icon-add-to-cart.svg" alt="Add to basket" />
          Add to basket
        </button>
      </div>
      <div className="shopping-card__item-description">
        <div className="shopping-card__item-category">
          <p>Waffle</p>
        </div>
        <div className="shopping-card__item-name">
          <p>Waffle with Berries</p>
        </div>
      </div>
      <div className="shopping-card__item-price">
        <p>$6.50</p>
      </div>
    </div>
</div>
  )
}

export default ShoppingItem