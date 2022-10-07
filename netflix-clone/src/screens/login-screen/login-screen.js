import React, { useState } from 'react';
import NetflixLogo from '../../assets/images/netflix-logo.png';
import { SignInScreen } from '../signin-screen/signin-screen';
import './login-screen.css';

export const LoginScreen = () => {
   const [signIn, setSignIn] = useState(false);

   return (
      <div className='login-screen'>
         <div className='login-screen__background'>
            <img
               className='login-screen__logo'
               src={NetflixLogo}
               alt='Login screen'
            />
            <button
               className='login-screen__button'
               onClick={() => setSignIn(true)}
            >
               Sign in
            </button>
         </div>
         <div className='login-screen__gradient' />
         <div className='login-screen__body'>
            {signIn ? (
               <SignInScreen />
            ) : (
               <>
                  <h1>Unlimited films, TV programmes and more.</h1>
                  <h2>Watch anywher, cancel at any time</h2>
                  <h3>
                     Ready to watch? Enter your email to create or restart your
                     membership.
                  </h3>
                  <div className='login-screen__input'>
                     <form>
                        <input type='email' placeholder='Email address' />
                        <button
                           className='login-screen__get-started'
                           onClick={() => setSignIn(true)}
                        >
                           GET STARTED
                        </button>
                     </form>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};
