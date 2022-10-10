import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {};

export const ExperienceCard = (props: Props) => {
   return (
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
         <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src='/assets/images/cartoon-pic.png'
            alt='pic'
            className='rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
         />
         <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Developer</h4>
            <p className='font-bold text-2xl mt-1'>Coforge</p>
            <div className='flex space-x-2 my-2'>
               <Image
                  className='rounded-full'
                  src='/assets/svg/css3.svg'
                  height={40}
                  width={40}
                  alt='skill'
               />
            </div>
            <p className='uppercase py-5 text-gray-300'>
               Started work... - Ended...
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
               <li>Summary points</li>
               <li>Summary points</li>
               <li>Summary points</li>
               <li>Summary points</li>
               <li>Summary points</li>
            </ul>
         </div>
      </article>
   );
};
