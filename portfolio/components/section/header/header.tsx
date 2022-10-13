import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header = () => {
   return (
      <header className='sticky top-0 mx-auto flex max-w-7xl items-start justify-between p-5'>
         <motion.div
            initial={{
               x: -500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
         >
            <SocialIcon
               url='https://www.youtube.com/rishabh7g'
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
               url='https://www.instagram.com/rishabh7g/'
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
               url='https://twitter.com/rishabh7g'
               fgColor='gray'
               bgColor='transparent'
            />
         </motion.div>
         <Link href='#contact'>
            <motion.div
               initial={{
                  x: 500,
                  opacity: 0,
                  scale: 0.5,
               }}
               animate={{ x: 0, opacity: 1, scale: 1 }}
               transition={{ duration: 1.5 }}
               className='flex cursor-pointer flex-row items-center text-gray-300'
            >
               <SocialIcon
                  className='cursor-pointer'
                  network='email'
                  fgColor='gray'
                  bgColor='transparent'
               />
               <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
                  Get in touch
               </p>
            </motion.div>
         </Link>
      </header>
   );
};
