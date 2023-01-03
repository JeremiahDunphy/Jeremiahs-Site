import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jeremiah Dunphy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi there, I am a United States based <strong className="text-stone-100">Senior Strategic Human Resources Professional </strong>, currently working
        at <strong className="text-stone-100">CW Resources.</strong> Prior to CW Resources, I was an HR Manager in the Army for 5th Special Forces Group. As a Senior Human Resources Professional, I am responsible for managing all aspects of HR and People Operations, including employee relations, talent acquisition, performance management, compliance, training, risk management, health, safety, employment and labor law, HRIS Management and employee engagement. My goal is to work closely with leadership and employees to drive business success through effective HR strategies and practices that are both results- and data-driven, while also maintaining a human-centric approach.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Various Programming Languages</strong>,
        Website Development, or building beautiful Dashboards.{' '}
        <strong className="text-stone-100">I enjoy Data, Computer Science and Game Development as a hobby in my free time.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! thanks for taking the time to visit my professional website. My name is Jeremiah Dunphy (He/Him) and I currently work in a Strategic Senior Human Resources Professional at CW Resources Inc. I have always been passionate about helping people and organizations reach their full potential, and I have found a perfect outlet for this passion in the field of HR and People Management.I began my career in HR almost a decade ago and have since gained a wide range of experience in various industries and organizations. I have held HR positions in both small and large companies, giving me a well-rounded understanding of the unique challenges and opportunities that different types of organizations face when it comes to managing and developing their human capital.`,
  
  description1: `I hold a Bachelors in Human Resources and a Masters in Business Administration. I am currently obtaining my doctorate in Human Resources and Business Management.In my current role as HR Director, I am responsible for overseeing all aspects of human resources management in over 20 states.`,
  
  description2:` Outside of work, I enjoy spending time with my Family, Coding, Data, Running, Website and Game Development. I am also an active member of the Society for Human Resource Management and am always looking for ways to stay up-to-date on the latest HR trends and best practices.`,
  
  description3: `As a Combat Veteran who has served on two tours of duty, I know firsthand the sacrifices that our military members make to protect our country. That is why I am committed to giving back to the veteran community through my volunteer work at the VA. Whether it is providing support and companionship to Veterans during hospital stays, helping with paperwork and benefits, or just being a listening ear, I am dedicated to doing whatever I can to assist and support our Veterans. It is my way of honoring their service and sacrifices, and I am grateful for the opportunity to give back to those who have given so much for our country.`,

  description4: `While Volunteering, I have had the opportunity to assist Veterans with a variety of tasks and needs. Whether it is providing support and companionship during hospital stays, helping with paperwork and benefits, or just being a listening ear, I am committed to doing whatever I can to help our Veterans.`,
  
  description5: `I am grateful for the opportunity to give back to those who have given so much for our country, and I am committed to continuing to support and assist Veterans in any way I can. It is a small way to show my appreciation and gratitude for their service and sacrifice.`,
  
  description6: `Thank you for taking the time to learn more about me. I am excited to bring my skills and experience to bear in helping organizations and individuals reach their full potential.`,
               
               aboutItems: [
                 {label: 'Location', text: 'Hartford, CT', Icon: MapIcon},
                 {label: 'Age', text: '27', Icon: CalendarIcon},
                 {label: 'Nationality', text: '', Icon: FlagIcon},
                 {label: 'Interests', text: 'People, Computer Science, Law and Psycology', Icon: SparklesIcon},
                 {label: 'Studying', text: 'Docotorate in Human Resources and Business Management - Capella University', Icon: AcademicCapIcon},
                 {label: 'Employment', text: 'Cw Resources Inc.', Icon: OfficeBuildingIcon},
               ],
             };
             
             
             
             

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Employment Law and Business Management',
    skills: [
      {
        name: 'U.S Labor Law',
        level: 10,
      },
      {
        name: 'Labor Relations',
        level: 10,
      },
      {
        name: 'Training, Employee Development, Compliance, Risk and Performance Management',
        level: 9,
      },
    ],
  },
  {
    name: 'Human Resources Data, Information and System Management',
    skills: [
      {
        name: 'System Implementation',
        level: 9,
      },
      {
        name: 'User Management, ATS and Data Analytics',
        level: 10,
      },
      {
        name: 'Building HR Analtical Reports, organizing data and creating Dashboards',
        level: 9,
      },
    ],
  },
  {
    name: 'People Operations, Leadership  and Management Skills',
    skills: [
      {
        name: 'Decision Making and Strategic thinking',
        level: 10,
      },
      {
        name: 'Time and Change Management priniciples and best practices',
        level: 9,
      },
      {
        name: 'Leadership and Experience Driven Empathy',
        level: 10,
      },
    ],
  },
  {
    name: 'Talent Acquisition, Workforce planning and Succession Management',
    skills: [
      {
        name: 'Data-Centered Recruiting and Source Management',
        level: 9,
      },
      {
        name: 'Employee Oboarding, EEO, Behavioral Interviewing, Orientation and handbook Creation',
        level: 10,
      },
      {
        name: 'Compensensation and Benefits',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2018',
    location: 'Quinebaug Valley Community College | Danielson, CT',
    title: 'Associates in Human Services',
    content:
    
    <p>My time at Quinebaug valley community college was memorable and I will never forget the important skills I took with me. I learning communication and interpersonal skills and my confidence increased and I establised rapport and build trust with clients. One very unique takeaway I had from this program was my ability to empathize and understand diverse cultures and backgrounds. This has helped me tremendously and continues to as I navigate my career.
    </p>
  },
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'CW Resources Inc',
    title: 'Strategic Human Resources and HRIS Manager',
    content: (
      <div>
        <ul>
          <li>• Facilitated the creation of employee resource groups, resulting in a 25% increase in representation of underrepresented groups and a corresponding improvement in inclusivity and diversity.</li>
          <li>• Led a team of HR professionals in the development and implementation of employee programs, policies, and procedures, resulting in a 25% increase in employee retention and a 20% increase in employee satisfaction.</li>
          <br></br>
          <li>• Reduced turnover by 20% through targeted recruitment and selection efforts</li>
          <br></br>
          <li>• Developed and administered the company's performance management system, resulting in a 15% improvement in overall employee performance.</li>
          <br></br>
          <li>• Implemented a new applicant tracking system, streamlining the hiring process and reducing time-to-fill by 30%.</li>
          <br></br>
          <li>• Designed and delivered employee training programs on topics such as leadership development, communication skills, and conflict resolution, resulting in a 25% improvement in team collaboration and a 15% increase in productivity.</li>
          <br></br>
          <li>• Led the development of an employee engagement survey, resulting in a 10% increase in employee engagement and a corresponding improvement in retention and performance.</li>
          <br></br>
          <li>• Worked closely with senior leadership to develop and implement a comprehensive succession planning program, ensuring the company has a strong pipeline of talent for key leadership roles.</li>
          <br></br>
          <li>• Developed and implemented a company-wide diversity and inclusion initiative, resulting in a 25% increase in representation of underrepresented groups in leadership roles.</li>
          <br></br>
          <li>• Managed the company's employee benefits program, resulting in a 15% reduction in healthcare costs and a 20% increase in employee participation in wellness programs.</li>
          <br></br>
          <li>• Collaborated with the leadership team to design and implement a flexible work arrangement program, resulting in a 15% increase in employee satisfaction and a corresponding improvement in retention.</li>
          
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2018 - April 2022',
    location: '5th Special Forces Group Fort Campbell, KY',
    title: 'Human Resources Manager',
    content: (
      <p>
         <div>
        <ul>
          <li>• Improved employee retention by 15% through the implementation of an employee engagement program</li>
          <br></br>
          <li>• Reduced turnover by 20% through targeted recruitment and selection efforts</li>
          <br></br>
          <li>• Developed and implemented a new benefits package that resulted in a 15% increase in employee satisfaction</li>
          <br></br>
          <li>• Led a company-wide training initiative that increased productivity by 10%</li>
          <br></br>
          <li>• Conducted a salary benchmarking study that resulted in a 5% increase in pay for underpaid employees</li>
          <br></br>
          <li>• Implemented a new performance review process that resulted in a 10% increase in employee performance ratings</li>
          <br></br>
          <li>• Streamlined the onboarding process, resulting in a 20% reduction in time to full productivity for new hires</li>
          <br></br>
          <li>• Conducted an HR policy audit that identified and corrected deficiencies, improving compliance by 50%</li>
          <br></br>
          <li>• Assisted in the development of a budget that allocated resources effectively, resulting in a 15% increase in HR initiatives</li>
          <br></br>
          <li>• Provided HR support to employees, resulting in a 25% reduction in HR-related complaints</li>
        </ul>
      </div>
      </p>
    ),
  },
  {
    date: 'June 2016 - March 2018',
    location: 'Songoda Inc, Storrs Connecticut',
    title: 'Human Resources Business Partner and Diversity and inclusion Specialist',
    content: (
      <p>
         <div>
        <ul>
          <li>• Partnered with leadership to develop and implement HR strategies that aligned with business goals, resulting in a 15% increase in revenue.</li>
          <br></br>
          <li>• Managed employee relations issues, resulting in a 25% reduction in turnover and a corresponding improvement in retention.</li>
          <br></br>
          <li>• Developed and implemented a new benefits package that resulted in a 15% increase in employee satisfaction</li>
          <br></br>
          <li>• Collaborated with cross-functional teams to design and implement employee development programs, resulting in a 20% increase in employee skills and a corresponding improvement in performance.</li>
          <br></br>
          <li>• Led the development of a company-wide engagement survey, resulting in a 10% increase in employee engagement and a corresponding improvement in retention and performance.</li>
          <br></br>
          <li>• Developed and implemented a comprehensive talent management program, resulting in a 20% increase in the number of high-potential employees identified and developed.</li>
          <br></br>
          <li>• Conducted diversity assessments and analyzed data to identify areas for improvement</li>
          <br></br>
          <li>• Collaborated with management to establish diversity and inclusion goals and objectives</li>
          <br></br>
          <li>• Advocated for underrepresented groups within the organization and worked to create a more inclusive workplace culture</li>
          <br></br>
          <li>• Implmented and Facilitated workshops and training sessions on diversity and inclusion topics</li>
        </ul>
      </div>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
