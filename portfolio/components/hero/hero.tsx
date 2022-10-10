import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../background-circles/background-circles';

export const Hero = () => {
   const [text, count] = useTypewriter({
      words: [
         "Aello, The Name's Rishabh",
         'Guy-who-loves-UI-UX.tsx',
         '<ButLovesReactCSSMore />',
      ],
      loop: true,
      delaySpeed: 2000,
   });
   return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
         <BackgroundCircles />
         <Image
            className='rounded-full h-32 w-32 mx-auto object-cover'
            src='/assets/images/profile-pic.jpg'
            alt='profile pic'
            height={200}
            width={200}
            objectFit='cover'
         />
         <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
               Frontend Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
               <span className='mr-3'>{text}</span>
               <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
               <Link href='#about'>
                  <button className='hero__button'>About</button>
               </Link>
               <Link href='#experience'>
                  <button className='hero__button'>Experience</button>
               </Link>
               <Link href='#skills'>
                  <button className='hero__button'>Skills</button>
               </Link>
               <Link href='#projects'>
                  <button className='hero__button'>Projects</button>
               </Link>
            </div>
         </div>
      </div>
   );
};
