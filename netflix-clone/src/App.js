import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { HomeScreen } from './screens/home-screen/home-screen';
import { LoginScreen } from './screens/login-screen/login-screen';
import { ProfileScreen } from './screens/profile-screen/profile-screen';

function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
         if (userAuth) {
            const { uid, email } = userAuth;
            dispatch(login({ uid, email }));
         } else {
            dispatch(logout());
         }
      });
      return unsubscribe;
   }, [dispatch]);

   return (
      <div className='app'>
         <Router>
            {!user ? (
               <LoginScreen />
            ) : (
               <Routes>
                  <Route exact path='/' element={<HomeScreen />} />
                  <Route path='/profile' element={<ProfileScreen />} />
               </Routes>
            )}
         </Router>
      </div>
   );
}

export default App;
