import { loadStripe } from '@stripe/stripe-js';
import {
   addDoc,
   collection,
   doc,
   getDocs,
   onSnapshot,
   query,
   where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import './plan-screen.css';

export const PlanScreen = () => {
   const [products, setProducts] = useState([]);
   const user = useSelector(selectUser);
   const [subscription, setSubscription] = useState(null);

   useEffect(() => {
      const fetchSubscription = async () => {
         // read a collection from firestore
         const customerRef = doc(db, 'customers', user.uid);
         const susbscriptionRef = collection(customerRef, 'subscriptions');
         const querySnap = await getDocs(susbscriptionRef);
         querySnap.forEach((subscriptionDoc) => {
            const data = subscriptionDoc.data();
            setSubscription({
               role: data.role,
               current_period_end: data.current_period_end.seconds,
            });
         });
      };
      fetchSubscription();
   }, [user.uid]);

   useEffect(() => {
      const fetchData = async () => {
         // read a collection from firestore
         const stripeProducts = {};
         const productsRef = collection(db, 'products');
         const dbQuery = query(productsRef, where('active', '==', true));
         const querySnap = await getDocs(dbQuery);

         querySnap.forEach(async (productDoc) => {
            stripeProducts[productDoc.id] = productDoc.data();

            const docRef = doc(db, 'products', productDoc.id);
            const pricesRef = collection(docRef, 'prices');
            const priceSnap = await getDocs(pricesRef);

            priceSnap.forEach((priceDoc) => {
               stripeProducts[productDoc.id].prices = {
                  priceId: priceDoc.id,
                  priceData: priceDoc.data(),
               };
            });
         });
         setProducts(stripeProducts);
      };
      fetchData();
   }, []);

   const loadCheckout = async (priceId) => {
      const checkoutSessionData = {
         price: priceId,
         success_url: window.location.origin,
         cancel_url: window.location.origin,
      };

      // read a sub-collection from firestore
      const customerRef = doc(db, 'customers', user.uid);
      const checkoutSessionRef = collection(customerRef, 'checkout_sessions');

      addDoc(checkoutSessionRef, checkoutSessionData)
         .then(async (docRef) => {
            onSnapshot(docRef, async (snap) => {
               const { error, sessionId } = await snap.data();

               if (error) {
                  alert(`Error while loading checkout ${error.message}`);
               }

               if (sessionId) {
                  const stripe = await loadStripe(
                     'pk_test_51LqE3KSJos0BFSh17Lq7fyBxDYFoNug3nvYokS4hIuoheOPaCyhlWLeJgdryR18r7raFyoQH2jMyU6V0e1OlOu0T007htLAuF1'
                  );
                  stripe.redirectToCheckout({ sessionId: sessionId });
               }
            });
         })
         .catch((error) => alert(`An error occured ${error.message}`));
   };

   return (
      <div className='plan-screen'>
         {subscription && (
            <p className='plan-screen__renewal-date'>
               Renewal date: 
               {" "+ new Date(
                  subscription.current_period_end * 1000
               ).toLocaleDateString()}
            </p>
         )}
         {Object.entries(products).map(([id, product]) => {
            const isCurrentPackage = product.name
               ?.toLowerCase()
               .includes(subscription?.role.toLowerCase());
            return (
               <div key={id} className='plan-screen__product'>
                  <div className='plan-screen__info'>
                     <h5>{product.name}</h5>
                     <h6>{product.description}</h6>
                  </div>
                  <button
                     className={`plan-screen__button ${
                        isCurrentPackage && 'plan-screen__button--disabled'
                     }`}
                     onClick={() => loadCheckout(product.prices.priceId)}
                  >
                     {isCurrentPackage ? 'Current package' : 'Subscribe'}
                  </button>
               </div>
            );
         })}
      </div>
   );
};
