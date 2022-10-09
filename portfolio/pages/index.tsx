import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';

const Home: NextPage = () => {
   return (
      <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0'>
         <Head>
            <title>Portfolio</title>
         </Head>

         <Header />
         <section id='hero' className='snap-center'>
            <Hero />
         </section>

         {/* about */}

         {/* experience */}

         {/* skills */}

         {/* projects */}

         {/* contact me */}
      </div>
   );
};

export default Home;
