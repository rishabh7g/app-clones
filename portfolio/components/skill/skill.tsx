import { motion } from 'framer-motion';

interface SkillProps {
   className?: string;
   directionLeft?: boolean;
}

// class conflicts

// BEM - Block element modifier
// Styled compnent
// <div> <button class='btn'> </StyledDiv>
// 

export const Skill = ({ directionLeft, ...props }: SkillProps) => {
   return (
      <div {...props} className='group relative flex cursor-pointer'>
         <motion.img
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/assets/svg/css3.svg'
            className='border-gray-500 h-24 w-24 rounded-full border object-cover filter transition duration-300 ease-in-out group-hover:grayscale xl:h-32 xl:w-32'
         />
         <div className='group-hover:bg-white absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32'>
            <div className='flex h-full items-center justify-center'>
               <p className='text-black text-3xl font-bold opacity-100'>100%</p>
            </div>
            <button className='bg-red text-red'>Click</button>
         </div>
      </div>
   );
};
