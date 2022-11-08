import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { urlFor } from '../../../sanity';
import { PageInfo } from '../../../typings';

type Props = {
   pageInfo: PageInfo;
};

export const About = ({ pageInfo }: Props) => {
   const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

   const framerInitial = isMobile
      ? { x: -100, opacity: 0 }
      : { x: -200, opacity: 0 };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='relative mx-auto flex h-screen flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
      >
         <h3 className='absolute top-24 text-xl uppercase tracking-[20px] text-gray-500 sm:text-2xl'>
            About
         </h3>
         <div className='mt-5 flex flex-col gap-5 sm:mt-0 xl:flex-row'>
            <div className='flex flex-row justify-center gap-5 xl:flex-1 xl:basis-1/2'>
               <motion.img
                  initial={framerInitial}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='h-24 w-24 flex-shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-1/2'
                  src={urlFor(pageInfo?.profilePic).url()}
                  alt='profile pic'
               />
               <motion.img
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='h-24 w-24 flex-shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-1/2'
                  src={urlFor(pageInfo?.secondaryProfilePic).url()}
                  alt='profile pic'
               />
            </div>
            <div className='px-0 sm:space-y-10 md:px-10 md:text-center xl:basis-1/2 xl:text-left'>
               <h4 className='text-xl font-semibold sm:text-2xl md:text-4xl'>
                  Here is a{' '}
                  <span className='underline decoration-[#F7AB0A]/50'>
                     little
                  </span>{' '}
                  background
               </h4>
               <p className='mt-5 text-sm'>{pageInfo?.backgroundInformation}</p>
            </div>
         </div>
      </motion.div>
   );
};
