import { SocialIcon } from 'react-social-icons';

export const Header = () => {
   return (
      <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto'>
         <div>
            <SocialIcon
               url='https://www.youtube.com/rishabh7g'
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
               url='https://www.instagram.com/rishabh7g/'
               fgColor='gray'
               bgColor='transparent'
            />
            <SocialIcon
               url='https://twitter.com/rishabh7g'
               fgColor='gray'
               bgColor='transparent'
            />
         </div>
         <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
               className='cursor-pointer'
               network='email'
               fgColor='gray'
               bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
               Get in touch
            </p>
         </div>
      </header>
   );
};
