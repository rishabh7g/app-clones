import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

export const ContactMe = () => {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:rishabh7g@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
   };

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='text-lft relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 md:flex-row'
      >
         <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
            Contact Me
         </h3>

         <div className='flex flex-col space-y-10'>
            <h4 className='text-center text-4xl font-semibold'>
               I have got just what you need.{' '}
               <span className='underline decoration-[#F7AB0A]/50'>
                  Lets Talk.
               </span>
            </h4>
            <div className='space-y-10'>
               {/* <div className='flex items-center justify-center space-x-5'>
                  <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                  <p>+123456789</p>
               </div> */}
               <div className='flex items-center justify-center space-x-5'>
                  <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                  <p>rishabh7g@gmail.com</p>
               </div>
               <div className='flex items-center justify-center space-x-5'>
                  <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                  <p>Bangalore, India</p>
               </div>
            </div>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className='mx-auto flex flex-col items-center space-y-2'
            >
               <div className='flex space-x-2'>
                  <input
                     {...register('name')}
                     placeholder='Name'
                     className='contact__input'
                     type='text'
                  />
                  <input
                     {...register('email')}
                     placeholder='Email'
                     className='contact__input'
                     type='email'
                  />
               </div>
               <input
                  {...register('subject')}
                  placeholder='Subject'
                  className='contact__input'
                  type='text'
               />
               <textarea
                  {...register('message')}
                  placeholder='Message'
                  className='contact__input'
               ></textarea>
               <button className='w-full rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black'>
                  Submit
               </button>
            </form>
         </div>
      </motion.div>
   );
};
