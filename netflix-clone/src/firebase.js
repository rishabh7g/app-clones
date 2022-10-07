import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
   apiKey: 'AIzaSyB-WlEZZQlsmgYKKNA6AdByJ2lKON0ne_0',
   authDomain: 'netflix-clone-firebase7.firebaseapp.com',
   projectId: 'netflix-clone-firebase7',
   storageBucket: 'netflix-clone-firebase7.appspot.com',
   messagingSenderId: '824259386974',
   appId: '1:824259386974:web:34e72e1ab49056334ddecf',
   measurementId: 'G-VVV2RC85TW',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();


export { auth };
export default db;
