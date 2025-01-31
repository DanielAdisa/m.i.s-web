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
  
  export const featuredPrograms: Program[] = [
    {
      id: "1",
      slug: "art-design",
      title: "Art & Design",
      description: "Explore your creativity with our comprehensive art and design program.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      courses: [
        "Foundations of Drawing",
        "Digital Illustration",
        "Art History",
        "Sculpture Techniques",
        "Portfolio Development"
      ],
      duration: "3 Years",
      instructors: [
        {
          name: "Chioma Nwosu",
          bio: "MFA in Fine Arts with 10+ years teaching experience",
          image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Tunde Adebayo",
          bio: "Digital artist specializing in multimedia installations",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      ],
      admissionRequirements: [
        "Portfolio submission",
        "Basic drawing skills",
        "Letter of intent"
      ]
    },
    {
      id: "2",
      slug: "computer-science",
      title: "Computer Science",
      description: "Learn the latest in computer science and coding with our expert instructors.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      courses: [
        "Python Programming",
        "Web Development",
        "Data Structures",
        "Machine Learning",
        "Cybersecurity Fundamentals"
      ],
      duration: "4 Years",
      instructors: [
        {
          name: "Emeka Okoro",
          bio: "PhD in Computer Science with focus on AI",
          image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
          name: "Amina Mohammed",
          bio: "Full-stack developer and open-source contributor",
          image: "https://randomuser.me/api/portraits/women/67.jpg"
        }
      ],
      admissionRequirements: [
        "Math proficiency test",
        "Basic programming knowledge",
        "Personal project submission"
      ]
    },
    {
      id: "3",
      slug: "sports-athletics",
      title: "Sports & Athletics",
      description: "Join our sports teams and stay active with a variety of athletic programs.",
      icon: "⚽",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
      courses: [
        "Football Fundamentals",
        "Sports Nutrition",
        "Injury Prevention",
        "Team Strategy",
        "Physical Conditioning"
      ],
      duration: "2 Years",
      instructors: [
        {
          name: "Segun Adeyemi",
          bio: "Former national team coach with 15 years experience",
          image: "https://randomuser.me/api/portraits/men/88.jpg"
        },
        {
          name: "Ngozi Chukwu",
          bio: "Sports physiotherapist and fitness expert",
          image: "https://randomuser.me/api/portraits/women/72.jpg"
        }
      ],
      admissionRequirements: [
        "Physical fitness test",
        "Sports medical clearance",
        "Team tryouts"
      ]
    }
  ];