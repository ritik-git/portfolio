import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import heroImage from '../images/freepik__create-a-3d-cartoonstyle-character-resembling-a-yo__69399.png';
import porfolioImage4 from '../images/portfolio/Habiters.png';
import porfolioImage2 from '../images/portfolio/cuppa.png';
import porfolioImage5 from '../images/portfolio/leetcode.png';
import porfolioImage3 from '../images/portfolio/icons8-geeksforgeeks-480.png';

import profilepic from '../images/1678947645378.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Home,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio',
  description: 'React portfolio template built with react and next js',
};

export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const homeData: Home = {
  imageSrc: heroImage,
  name: `I'm Ritik Galgate.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m a <strong className="text-stone-100">Full Stack and Mobile Developer</strong> with a passion for creating
        scalable applications and always eager to learn new technologies and improve my craft.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      As a <strong>Software Engineer</strong> passionate about building scalable, efficient applications, I specialize
      in{' '}
      <strong>
        ReactJS, React Native, Next.js, Spring Boot, Firebase Messaging, Flutterflow, Microservices, Docker, AWS, Redux
      </strong>
      . I have expertise in UI libraries and solving complex DSA problems (100+ solved), turning challenges into
      real-world solutions.
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Indore, India', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Solving DSA, Learning New Tech', Icon: SparklesIcon},
    {label: 'Education', text: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'MindCrew Technologies Pvt. Ltd.', Icon: BuildingOffice2Icon},
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cuppa Leads',
    description:
      'Cuppa Leads is a project that filters leads and sends personalized emails using Mailgun. The leads are processed through Sales-Navigator, and AI-based prompts are used to generate personalized email content for each user. This solution automates the lead outreach process and provides efficient, personalized communication.',
    url: 'https://app.b2bleadz.tech/#/Email-Templates', // Replace with the actual link
    image: porfolioImage2, // Replace with the appropriate image
  },

  {
    title: 'Habiters',
    description:
      'Habiters is a habit-tracking application developed using Flutterflow. The app features personalized notifications through Firebase Messaging to keep users engaged and motivated to track and complete their daily habits.',
    url: 'https://play.google.com/store/apps/details?id=com.mycompany.habitly&hl=en_IN', // Replace with the actual link
    image: porfolioImage4, // Replace with the appropriate image
  },

  // {
  //   title: 'Full-Stack Portfolio Website',
  //   description:
  //     'This full-stack portfolio website showcases my development projects, including both frontend and backend solutions. The site is built with React.js for the frontend, featuring dynamic components and styled with modern design techniques, and integrated with a backend API to handle contact form submissions and display portfolio items.',
  //   url: 'https://your-portfolio-link.com', // Replace with the actual link
  //   image: porfolioImage1, // Replace with the appropriate image
  // },

  {
    title: 'Geeks for Geeks Profile',
    description:
      'Check out my Geeks for Geeks profile where I contribute to and solve various Data Structures and Algorithms problems. The platform is a great resource for learning and improving coding skills. I have solved more than 100 problems.',
    url: 'https://www.geeksforgeeks.org/user/smilinghritik/', // Replace with your Geeks for Geeks profile URL
    image: porfolioImage3, // Replace with the appropriate image or icon
  },

  {
    title: 'LeetCode Profile',
    description:
      'Visit my LeetCode profile to see my progress in solving coding problems and participating in contests. LeetCode offers a variety of challenges to enhance problem-solving and algorithmic skills.',
    url: 'https://leetcode.com/u/ritikgalgate38/', // Replace with your LeetCode profile URL
    image: porfolioImage5, // Replace with the appropriate image or icon
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Sep 2019 - Jul 2023',
    location: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV)',
    title: 'B.Tech. Software Engineering',
    content: (
      <p>
        <strong style={{color: '#f97316 !important'}}>Skills:</strong> React.js · Next.js · Java SpringBoot · TypeScript
        · Redux.js · Redux Thunk · Gitlab · Git · GitHub{' '}
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - January 2023',
    location: 'Indore, India',
    title: 'Software Engineer Intern at SolarHood',
    content: (
      <p>
        <strong style={{color: '#f97316'}}>Skills: </strong>
        Next js · React Native · Tailwind CSS · Web Engineering · Amazon Web Services (AWS) · Docker · Software Deployment ·
        GitLab · TypeScript · React.js · GitHub · Redux.js · Cascading Style Sheets (CSS) · Bootstrap · JavaScript ·
        Redux Thunk · Microservices · FlutterFlow · Firebase
      </p>
    ),
  },
  {
    date: 'July 2023 - Present',
    location: 'Indore, India',
    title: 'Software Engineer at MindCrew Technologies Pvt. Ltd.',
    content: (
      <p>
       Mindcrew Technologies is a dynamic startup where I worked on diverse technologies across multiple projects. This experience allowed me to broaden my skill set, tackle various challenges, and successfully complete numerous projects. I was honored to receive the Best Personality Award, reflecting my teamwork, adaptability, and problem-solving mindset.
        <span style={{display: 'block', marginTop: '10px'}}>
          <strong style={{color: '#f97316 !important'}}>Skills:</strong> jQuery · Tailwind CSS · TypeScript · React.js ·
          GitHub · Redux.js · Node.js · Next.js · Cascading Style Sheets (CSS) · Bootstrap · JavaScript · Redux Thunk{' '}
        </span>
      </p>
    ),
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [
    {
      href: 'https://www.linkedin.com/in/selcukkizilkaya/',
      name: 'Selcuk Kizilkaya',
      text: 'Fazal demonstrates a strong focus on achieving outcomes and skillfully navigating through numerous challenges. Despite encountering several obstacles, he adeptly resolved each issue by engaging in collaborative discussions with team members, ensuring he could progress and successfully reach the intended goals.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/yasar1/',
      name: 'Yasar Rahman',
      text: 'Fazal demonstrated a commendable ability to work independently, delivering a high-quality final product with meticulous attention to detail.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/vimbaimidzi/',
      name: 'Vimbai Beverly Midzi',
      text: `Fazal's work was instrumental in making sure I had the foundations for a donations CMS. Before this, there was an overdependency on engineering support that was very difficult to secure. He listened to my needs and made edits where necessary to make it more usable to me.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/azan-ibrar-9b03a3202/',
      name: 'Azan Ibrar',
      text: `You're an outstanding engineer, and an even more remarkable friend. Your constant support and willingness to help other falcons make a significant impact. Thanks for all the fantastic contributions you bring to the table!`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/zaid-iqbal-702b55150/',
      name: 'Zaid Iqbal',
      text: `Thanks for being a supportive colleague.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/sumran-waheed/',
      name: 'Samran Waheed',
      text: `I want to highlight the outstanding collaboration with Fazal on our recent project. As the Back-End Developer, I worked closely with Fazal, who handled the Front-End tasks.

      Fazal's quick and efficient Front-End work greatly contributed to our project's success. His clear communication and proactive approach ensured seamless collaboration. Despite facing challenges on the Back-End, Fazal consistently provided valuable support, pushing the project forward.
      
      I commend Fazal for his dedication, proficiency, and positive attitude. Working with him was a pleasure, and I look forward to future collaborations.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/hamza-sohail1/',
      name: 'Hamza Sohail',
      text: `Thank you, Fazal, for always being so supportive and helpful with any kind of technical issue. You possesses great knowledge and the ability to share it with others. Thanks for dedicating your time to guide and support me and many others.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/mohsin-khalid-a25669218/',
      name: 'Mohsin Khalid',
      text: `I would like to praise Fazal for always supporting me and guiding me during the start of my career. Your dedication and creativity are truly inspiring. Thank you for always helping me about the little details and overall structure of how things work at Careem.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: (
    <>
      <strong style={{color: 'rgba(249, 115, 22, 1) !important'}}>Reach out</strong> to me through the following social
      links, and let's make things happen! 🚀.Looking forward to connecting with you! 🌟
    </>
  ),
  items: [
    {
      type: ContactType.Email,
      text: 'ritikgalgate38@gmail.com',
      href: 'mailto:ritikGalgate@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Indore MP, India',
      href: 'https://maps.app.goo.gl/niCZXGvegM9AZdyD9',
    },
    {
      type: ContactType.Instagram,
      text: 'r_i_t_i_k_27',
      href: 'https://www.instagram.com/r_i_t_i_k_27/',
    },
    {
      type: ContactType.Github,
      text: 'Ritik-git',
      href: 'https://github.com/ritik-git',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ritik-git'},
  {label: 'FaceBook', Icon: FacebookIcon, href: 'https://www.facebook.com/hritik.galgate'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ritik-galgate-746437250/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/r_i_t_i_k_27/'},
 
];
