import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { About } from '../components/section/about/about';
import { ContactMe } from '../components/section/contact-me/contact-me';
import { Experience } from '../components/section/experience/experience';
import { Header } from '../components/section/header/header';
import { Hero } from '../components/section/hero/hero';
import { Projects } from '../components/section/projects/projects';
import { Skills } from '../components/section/skills/skills';

const Home: NextPage = () => {
   return (
      <div className='z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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

         <section id='contact' className='snap-center'>
            <ContactMe />
         </section>

         <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
               <div className='flex items-center justify-center'>
                  <Image
                     className='h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0'
                     src='/assets/images/cartoon-pic.png'
                     height={40}
                     width={40}
                       alt='skill'
                  />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;
