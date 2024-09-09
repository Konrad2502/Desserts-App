import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__icons'>
            <div className='footer__items'>
               <FontAwesomeIcon className='icon' icon={faFacebook} /> 
               <FontAwesomeIcon  className='icon' icon={faYoutube} />  
               <FontAwesomeIcon  className='icon' icon={faInstagram} /> 
               <FontAwesomeIcon  className='icon' icon={faTwitter} />
            </div>
        </div>
        <div className='footer__text'>
            <p>@ 2024 Copyright: Cake.com</p>
        </div>
    </div>
  )
}
