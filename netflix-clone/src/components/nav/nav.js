import React, { useEffect, useState } from 'react';
import NetflixAvatar from '../../assets/images/netflix-avatar.png';
import NetflixLogo from '../../assets/images/netflix-logo.png';

import './nav.css';

export const Nav = () => {
   const [show, setShow] = useState(false);

   const transitionNavBar = () => {
      setShow(window.scrollY > 100);
   };

   useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      return () => window.removeEventListener('scroll', transitionNavBar);
   }, []);

   return (
      <div className={`nav ${show && 'nav__black'}`}>
         <div className='nav__contents'>
            <img className='nav__logo' src={NetflixLogo} alt='Logo' />
            <img className='nav__avatar' src={NetflixAvatar} alt='Avatar' />
         </div>
      </div>
   );
};
