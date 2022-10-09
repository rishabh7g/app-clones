import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../background-circles/background-circles';

export const Hero = () => {
   const [text, count] = useTypewriter({
      words: ['Developer', 'Designer', 'Creator'],
      loop: true,
      delaySpeed: 2000,
   });
   return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
         <BackgroundCircles />
         <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
         </h1>
      </div>
   );
};
