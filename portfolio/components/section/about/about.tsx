import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../../../sanity';
import { PageInfo } from '../../../typings';

type Props = {
   pageInfo: PageInfo;
};

export const About = ({ pageInfo }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='relative mx-auto flex h-screen flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
      >
         <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
            About
         </h3>
         <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
            src={urlFor(pageInfo?.profilePic).url()}
            alt='profile pic'
         />
         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
               Here is a{' '}
               <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
               background
            </h4>
            <p className='text-sm'>{pageInfo?.backgroundInformation}</p>
         </div>
      </motion.div>
   );
};
