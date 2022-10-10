import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/section/about/about';
import { ContactMe } from '../components/section/contact-me/contact-me';
import { Experience } from '../components/section/experience/experience';
import { Header } from '../components/section/header/header';
import { Hero } from '../components/section/hero/hero';
import { Projects } from '../components/section/projects/projects';
import { Skills } from '../components/section/skills/skills';

const Home: NextPage = () => {
   return (
      <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0'>
         <Head>
            <title>Portfolio</title>
         </Head>

         <Header />

         <section id='hero' className='snap-start'>
            <Hero />
         </section>

         <section id='about' className='snap-center'>
            <About />
         </section>

         <section id='experience' className='snap-center'>
            <Experience />
         </section>

         <section id='skills' className='snap-center'>
            <Skills />
         </section>

         <section id='projects' className='snap-center'>
            <Projects />
         </section>

         <section id='contactMe' className='snap-center'>
            <ContactMe />
         </section>
      </div>
   );
};

export default Home;
