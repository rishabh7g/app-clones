import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { HomeScreen } from './screens/home-screen/home-screen';
import { LoginScreen } from './screens/login-screen/login-screen';

function App() {
   const user = null;

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
         if (userAuth) {
            //logged in
            console.log(
               '%c DEBUGGING is user logged in',
               'color: DarkGreen',
               userAuth
            );
         }
      });
      return unsubscribe;
   }, []);

   return (
      <div className='app'>
         <Router>
            {!user ? (
               <LoginScreen />
            ) : (
               <Routes>
                  <Route exact path='/' element={<HomeScreen />} />
                  <Route
                     path='/profile'
                     element={<h1 style={{ color: 'red' }}>Profile</h1>}
                  />
               </Routes>
            )}
         </Router>
      </div>
   );
}

export default App;
