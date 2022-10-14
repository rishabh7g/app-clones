import { motion } from 'framer-motion';
import { WorkExperience } from '../../../typings';
import { ExperienceCard } from '../../experience-card/experience-card';

type Props = {
   experiences: WorkExperience[];
};

export const Experience = ({ experiences }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 md:flex-row'
      >
         <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
            Experience
         </h3>
         <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {experiences.map((experience) => (
               <ExperienceCard key={experience._id} experience={experience} />
            ))}
         </div>
      </motion.div>
   );
};
