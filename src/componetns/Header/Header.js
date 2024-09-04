import React from 'react'
import './Header.scss';

function Header() {
  return (
  <div className='header'>
    <div className='header__overlay'></div>
    <h1 className='header__title'>Dessert menu</h1>
    <img src='./assets/images/image-background.jpg' alt='header-picture' className='header__image'></img>
  </div>
   
  )
}

export default Header;