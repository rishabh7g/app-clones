interface SanityBody {
   _createdAt: string;
   _id: string;
   _rev: string;
   _updatedAt: string;
}

interface Image {
   _type: 'image';
   asset: {
      _ref: string;
      _type: 'referenence';
   };
}

export interface PageInfo extends SanityBody {
   _type: 'pageInfo';
   address: string;
   backgroundInformation: string;
   email: string;
   role: string;
   heroImage: string;
   name: string;
   phoneNumber: string;
   profilePic: Image;
   secondaryProfilePic: Image;
}

export interface Technology extends SanityBody {
   _type: 'skill';
   image: Image;
   progress: number;
   title: string;
}

export interface Skill extends SanityBody {
   _type: 'skill';
   image: Image;
   progress: number;
   title: string;
}
export interface Project extends SanityBody {
   title: string;
   _type: 'project';
   image: Image;
   githubUrl: string;
   summary: string;
   technologies: Technology[];
}

export interface WorkExperience extends SanityBody {
   company: string;
   _type: 'experience';
   companyImage: Image;
   dateStarted: date;
   dateEnded: date;
   isCurrentlyWorkingHere: boolean;
   jobTitle: string;
   points: string[];
   technologies: Technology[];
}

export interface Social extends SanityBody {
   _type: 'social';
   title: string;
   url: string;
}
