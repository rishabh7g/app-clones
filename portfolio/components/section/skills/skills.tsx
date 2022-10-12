import { motion } from 'framer-motion';
import { Skill } from '../../skill/skill';

type Props = {};

export const Skills = ({}: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='relative h-screen flex overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      >
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
         </h3>
         <h3 className='absolute top-36 uppercase tracking-[13px] text-gray-500 text-sm'>
            Hover over a skill for current profeciency
         </h3>
         <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
         </div>
      </motion.div>
   );
};
