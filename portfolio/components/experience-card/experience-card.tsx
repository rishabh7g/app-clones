import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';
import { WorkExperience } from '../../typings';

type Props = {
   experience: WorkExperience;
};

export const ExperienceCard = ({ experience }: Props) => {
   return (
      <article className='flex w-[350px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 text-center transition-opacity duration-200 hover:opacity-100 sm:w-[500px] sm:opacity-40 md:w-[600px]'>
         <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            alt='pic'
            className='h-20 w-20 rounded-full object-cover object-center sm:h-32 sm:w-32 xl:h-[200px] xl:w-[200px]'
         />
         <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light sm:text-4xl'>
               {experience.jobTitle}
            </h4>
            <p className='mt-1 text-2xl font-bold sm:mb-0'>
               {experience.company}
            </p>
            <div className='my-5 flex flex-wrap justify-center gap-1 space-x-2 sm:my-2'>
               {experience.technologies.map((technology) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                     key={technology._id}
                     className='h-9 rounded-full'
                     src={urlFor(technology?.image).url()}
                     alt='skill'
                  />
               ))}
            </div>
            <p className='uppercase text-gray-300 sm:py-5'>
               {new Date(experience.dateStarted).toDateString()} -{' '}
               {experience.isCurrentlyWorkingHere
                  ? 'Present'
                  : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='ml-5 hidden list-disc space-y-4 text-left text-lg sm:block'>
               {experience.points.map((point) => (
                  <li key={point}>{point}</li>
               ))}
            </ul>
         </div>
      </article>
   );
};
