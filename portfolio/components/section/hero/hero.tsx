import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../../../sanity';
import { PageInfo } from '../../../typings';
import BackgroundCircles from '../../background-circles/background-circles';

type Props = {
   pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
   const [text, count] = useTypewriter({
      words: [
         `Aello, The Name's ${pageInfo.name}`,
         'Guy-who-loves-UI-UX.tsx',
         '<ButLovesReactCSSMore />',
      ],
      loop: true,
      delaySpeed: 2000,
   });
   return (
      <div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
         <BackgroundCircles />
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            className='mx-auto h-32 w-32 rounded-full object-cover'
            src={urlFor(pageInfo?.heroImage).url()}
            alt='profile pic'
         />
         <div className='z-20'>
            <h2 className='pb-2 text-sm uppercase tracking-[15px] text-gray-500'>
               {pageInfo.role}
            </h2>
            <h1 className='scroll-px-10 text-5xl font-semibold lg:text-6xl'>
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
