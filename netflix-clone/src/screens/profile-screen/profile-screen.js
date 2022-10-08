import React from 'react';
import { useSelector } from 'react-redux';
import NetflixAvatar from '../../assets/images/netflix-avatar.png';
import { Nav } from '../../components/nav/nav';
import { selectUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './profile-screen.css';
import { PlanScreen } from '../plans-screen/plan-screen';

export const ProfileScreen = () => {
   const user = useSelector(selectUser);
   return (
      <div className='profile-screen'>
         <Nav showAvatar={false} />
         <div className='profile-screen__body'>
            <h1>Edit profile</h1>
            <div className='profile-screen__info'>
               <img
                  className='profile-screen__avatar'
                  src={NetflixAvatar}
                  alt='Avatar'
               />
               <div className='profile-screen__details'>
                  <h2>{user.email}</h2>
                  <div className='profile-screen__plans'>
                     <h3>Plans</h3>
                     <PlanScreen />
                     <button
                        className='profile-screen__sign-out'
                        onClick={() => signOut(auth)}
                     >
                        Sign out
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
