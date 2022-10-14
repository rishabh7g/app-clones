import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { About } from '../components/section/about/about';
import { ContactMe } from '../components/section/contact-me/contact-me';
import { Experience } from '../components/section/experience/experience';
import { Header } from '../components/section/header/header';
import { Hero } from '../components/section/hero/hero';
import { Projects } from '../components/section/projects/projects';
import { Skills } from '../components/section/skills/skills';
import { PageInfo, Project, Skill, Social, WorkExperience } from '../typings';
import { fetchExperiences } from '../utils/fetch-experiences';
import { fetchPageInfo } from '../utils/fetch-page-info';
import { fetchProjects } from '../utils/fetch-projects';
import { fetchSkills } from '../utils/fetch-skills';
import { fetchSocials } from '../utils/fetch-socials';

type Props = {
   pageInfo: PageInfo;
   experiences: WorkExperience[];
   skills: Skill[];
   socials: Social[];
   projects: Project[];
};

const Home: NextPage<Props> = ({
   pageInfo,
   experiences,
   skills,
   socials,
   projects,
}: Props) => {
   return (
      <div className='z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
         <Head>
            <title>Rishabh | Frontend developer</title>
         </Head>

         <Header socials={socials} />

         <section id='hero' className='snap-start'>
            <Hero pageInfo={pageInfo} />
         </section>

         <section id='about' className='snap-center'>
            <About pageInfo={pageInfo} />
         </section>

         <section id='experience' className='snap-center'>
            <Experience experiences={experiences} />
         </section>

         <section id='skills' className='snap-center'>
            <Skills skills={skills} />
         </section>

         <section id='projects' className='snap-center'>
            <Projects projects={projects} />
         </section>

         <section id='contact' className='snap-center'>
            <ContactMe />
         </section>

         <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
               <div className='flex items-center justify-center'>
                  <Image
                     className='h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0'
                     src='/assets/images/cartoon-pic.png'
                     height={40}
                     width={40}
                     alt='skill'
                  />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
   const pageInfo: PageInfo = await fetchPageInfo();
   const experiences: WorkExperience[] = await fetchExperiences();
   const skills: Skill[] = await fetchSkills();
   const socials: Social[] = await fetchSocials();
   const projects: Project[] = await fetchProjects();
   return {
      props: { pageInfo, experiences, skills, socials, projects },
      revalidate: 10,
   };
};
