import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '../../../sanity';
import { Project } from '../../../typings';

type Props = {
   projects: Project[];
};

export const Projects = ({ projects }: Props) => {
   const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

   const framerInitial = isMobile
      ? { y: -100, opacity: 0 }
      : { y: -300, opacity: 0 };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden sm:px-10 md:flex-row'
      >
         <h3 className='absolute top-24 text-xl uppercase tracking-[20px] text-gray-500 sm:text-2xl'>
            Projects
         </h3>

         <div className='relative z-20 mt-5 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 sm:mt-0'>
            {projects.map((project, i) => (
               <div
                  key={project._id}
                  className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-3 p-20 sm:space-y-5 md:p-44'
               >
                  <motion.img
                     src={urlFor(project?.image).url()}
                     alt='project-image'
                     initial={framerInitial}
                     transition={{ duration: 1.2 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                  />
                  <div className='max-w-6xl space-y-5 px-0 sm:space-y-10 md:px-10'>
                     <h4 className='text-center text-2xl font-semibold sm:text-4xl'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                           Case Study {i + 1} of {projects.length}:
                        </span>{' '}
                        {project?.title}
                        <span className='mx-auto flex flex-row items-center justify-center'>
                           <SocialIcon
                              className='h-10 w-10 cursor-pointer'
                              url={project.githubUrl}
                              fgColor='gray'
                              bgColor='transparent'
                              label='Link to github repo'
                              target='_blank'
                           ></SocialIcon>
                           <a
                              href={project.githubUrl}
                              className='text-lg sm:text-2xl'
                              target='blank'
                           >
                              Github
                           </a>
                        </span>
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
