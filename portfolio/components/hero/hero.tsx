import { Cursor, useTypewriter } from 'react-simple-typewriter';

export const Hero = () => {
   const [text, count] = useTypewriter({
      words: ['Developer', 'Designer', 'Creator'],
      loop: true,
      delaySpeed: 2000,
   });
   return (
      <div>
         <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
         </h1>
      </div>
   );
};
