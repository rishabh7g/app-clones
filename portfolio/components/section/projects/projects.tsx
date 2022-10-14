import { motion } from 'framer-motion';
import { urlFor } from '../../../sanity';
import { Project } from '../../../typings';

type Props = {
   projects: Project[];
};

export const Projects = ({ projects }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 md:flex-row'
      >
         <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
            Projects
         </h3>

         <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project, i) => (
               <div
                  key={project._id}
                  className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'
               >
                  <motion.img
                     src={urlFor(project?.image).url()}
                     alt='project-image'
                     initial={{ y: -300, opacity: 0 }}
                     transition={{ duration: 1.2 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                  />
                  <div className='max-w-6xl space-y-10 px-0 md:px-10'>
                     <h4 className='text-center text-4xl font-semibold'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                           Case Study {i + 1} of {projects.length}:
                        </span>{' '}
                        {project?.title}
                     </h4>

                     <div className='flex items-center justify-center space-x-2'>
                        {project?.technologies.map((technology) => (
                           // eslint-disable-next-line @next/next/no-img-element
                           <img
                              className='h-9'
                              key={technology._id}
                              src={urlFor(technology?.image).url()}
                              alt={technology.title}
                           />
                        ))}
                     </div>

                     <p className='text-center text-lg md:text-left'>
                        {project?.summary}
                     </p>
                  </div>
               </div>
            ))}
         </div>
         <div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10'></div>
      </motion.div>
   );
};
