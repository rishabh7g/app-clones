import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';
import { Skill as SkillType } from '../../typings';
import { useMediaQuery } from 'react-responsive';
interface SkillProps {
   className?: string;
   directionLeft?: boolean;
   skill: SkillType;
}

export const Skill = ({ directionLeft, skill, ...props }: SkillProps) => {
   const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
   
   const framerInitial = isMobile
      ? { x: directionLeft ? -100 : 100, opacity: 0 }
      : { x: directionLeft ? -200 : 200, opacity: 0 };
   const framerWhileInView = isMobile
      ? { opacity: 1, x: 0 }
      : { opacity: 1, x: 0 };
   return (
      <div {...props} className='group relative flex cursor-pointer'>
         <motion.img
            initial={framerInitial}
            transition={{ duration: 1 }}
            whileInView={framerWhileInView}
            src={urlFor(skill?.image).url()}
            className='h-14 w-14 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale sm:h-24 sm:w-24 xl:h-32 xl:w-32'
         />
         <div className='absolute z-0 h-10 w-10 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32'>
            <div className='flex h-full items-center justify-center'>
               <p className='text-md font-bold text-black opacity-100 sm:text-3xl'>
                  {skill.progress}%
               </p>
            </div>
         </div>
      </div>
   );
};
