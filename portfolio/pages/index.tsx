import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
   return (
      <div className={styles.container}>
         <Head>
            <title>Portfolio</title>
         </Head>
      </div>
   );
};

export default Home;
