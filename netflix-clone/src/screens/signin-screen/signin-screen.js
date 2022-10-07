import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword, 
} from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './signin-screen.css';

export const SignInScreen = () => {
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const register = (e) => {
      e.preventDefault();

      const [email, password] = [
         emailRef.current.value,
         passwordRef.current.value,
      ];

      createUserWithEmailAndPassword(auth, email, password)
         .then((authUser) => {
            console.log(
               '%c DEBUGGING Registration',
               'color: LightCoral',
               authUser
            );
         })
         .catch((error) => {
            alert(error.message);
         });
   };

   const signin = (e) => {
      e.preventDefault();

      const [email, password] = [
         emailRef.current.value,
         passwordRef.current.value,
      ];

      signInWithEmailAndPassword(auth, email, password)
         .then((authUser) => {
            console.log('%c DEBUGGING Signin', 'color: LightCoral', authUser);
         })
         .catch((error) => {
            alert(error.message);
         });
   };

   return (
      <div className='signin-screen'>
         <form>
            <h1>Sign in</h1>
            <input type='email' ref={emailRef} placeholder='Email address' />
            <input type='password' ref={passwordRef} placeholder='Password' />
            <button type='submit' onClick={signin}>
               Sign in
            </button>
            <h4>
               <span className='signin-screen__text--gray'>
                  New to Netflix?
               </span>
               <span className='signin-screen__text--link' onClick={register}>
                  Sign Up now.
               </span>
            </h4>
         </form>
      </div>
   );
};
