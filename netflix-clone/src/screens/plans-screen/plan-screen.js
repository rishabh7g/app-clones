import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import './plan-screen.css';

export const PlanScreen = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
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

   console.log(products);

   return <div className='plan-screen'>PlanScreen</div>;
};
