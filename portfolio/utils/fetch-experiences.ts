import { WorkExperience } from '../typings';

export const fetchExperiences = async () => {
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-experiences`
   );
   const data = await res.json();
   const experiences: WorkExperience[] = data.experiences;
   return experiences;
};
