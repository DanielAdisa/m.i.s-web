export interface Program {
    id: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    courses: string[];
    duration: string;
    instructors: Instructor[];
    admissionRequirements: string[];
  }
  
  export interface Instructor {
    name: string;
    bio: string;
    image: string;
  }