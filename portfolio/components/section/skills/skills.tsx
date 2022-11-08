import { motion } from 'framer-motion';
import { Skill as SkillType } from '../../../typings';
import { Skill } from '../../skill/skill';

type Props = {
   skills: SkillType[];
};

export const Skills = ({ skills }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 md:flex-row'
      >
         <h3 className='absolute top-24 text-xl uppercase tracking-[20px] text-gray-500 sm:text-2xl'>
            Skills
         </h3>
         <h3 className='absolute top-36 hidden text-sm uppercase tracking-[5px] text-gray-500 sm:tracking-[13px] lg:block'>
            Hover over a skill for current profeciency
         </h3>
         <h3 className='absolute top-36 text-center text-sm uppercase tracking-[5px] text-gray-500 sm:tracking-[7px] lg:hidden'>
            Click a skill for current profeciency
         </h3>
         <div className='grid grid-cols-4 gap-2 sm:grid-cols-4 sm:gap-5'>
            {skills?.slice(0, skills.length / 2).map((skill) => (
               <Skill key={skill._id} skill={skill} />
            ))}

            {skills?.slice(skills.length / 2).map((skill) => (
               <Skill key={skill._id} skill={skill} directionLeft />
            ))}
         </div>
      </motion.div>
   );
};
