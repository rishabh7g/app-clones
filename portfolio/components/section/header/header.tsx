import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../../../typings';

type Props = {
   socials: Social[];
};

export const Header = ({ socials }: Props) => {
   return (
      <header className='sticky top-0 z-50 mx-auto flex max-w-7xl items-start justify-between p-5'>
         <motion.div
            initial={{
               x: -500,
               opacity: 0,
               scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
         >
            {socials.map((social) => (
               <SocialIcon
                  key={social._id}
                  url={social.url}
                  fgColor='gray'
                  bgColor='transparent'
                  target='_blank'
               />
            ))}
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
