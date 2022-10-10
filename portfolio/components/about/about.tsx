import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export const About = ({}: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='relative flex flex-col h-screen text-center px-10 justify-evenly mx-auto items-center md:flex-row md:text-left'
      >
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
         </h3>
         <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            src='/assets/images/profile-pic.jpg'
            alt='profile pic'
         />
         <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
               Here is a{' '}
               <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
               background
            </h4>
            <p className='text-sm'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
               minima aliquid provident consectetur, maxime, odio fugit sequi
               vero harum, voluptatum magni iste! Reprehenderit minima
               consequuntur numquam qui praesentium? Saepe incidunt aliquam
               aspernatur, ratione repudiandae totam ex reprehenderit sed
               reiciendis quae eaque nobis pariatur porro fuga alias natus modi
               id quibusdam doloremque quasi architecto. Placeat rerum provident
               veniam, explicabo deleniti quis aut rem culpa officiis atque
               voluptatem assumenda nihil unde est odit quae consequuntur
               ducimus quibusdam laboriosam soluta magnam sit cumque qui? Iure
               non maxime culpa facili.
            </p>
         </div>
      </motion.div>
   );
};
