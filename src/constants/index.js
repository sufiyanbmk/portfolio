import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  rental,
  ecommerce,
  auction,
  threejs,
  nestjs,
  riolabzLogo,
  brototypeLogo,
  universityLogo,
} from '../assets';

export const navLinks = [
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Nest JS',
    icon: nestjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Riolabz',
    icon: riolabzLogo,
    iconBg: '#E6DEDD',
    date: 'June 2023 - Present',
    points: [
      'Managing Backend Using Nest.Js, Node.Js, MongoDb and Sql.',
      'Responsible for optimizing and enhancing codebase to improve Api performance and response times.',
      'Conducted code reviews, API testing, and managed server configurations to maintain quality and reliability.',
      'Led 9 projects, including 3 from inception, ensuring timely completion, efficient resource allocation, and effective client communication.',
    ],
  },
  {
    title: 'Intern MERN Stack Developer',
    company_name: 'Brototype',
    icon: brototypeLogo,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Apr 2023',
    points: [
      'Developed web applications using Mern stack and other related technologies.',
      'Self taught teaching way of learning new skills improve problem problem solving skill.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Getting in code reviews from senior developers.',
    ],
  },
  {
    title: 'Bsc Computer Science',
    company_name: 'Kannur University',
    icon: universityLogo,
    iconBg: '#383E56',
    date: 'Mar 2019 - Feb 2022',
    points: [
      'Completed Bsc Computer Science Degree.',
      'Participated in group projects, gaining practical experience in collaborative development.',
      'Acquired skills in web design.',
      'Developed project management abilities.',
      'Learned basics of computer coding and working mechanisms.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'RENTAL WEBSITE',
    description:
      'A web-based platform that allows users to search, rent, and manage rentals from various providers, providing a convenient and efficient solution.',
    tags: [
      {
        name: 'MERN Stack',
        color: '#61dafb',
      },
      {
        name: 'Tailwind & Material UI',
        color: '#ec4899',
      },
      {
        name: 'Socket.io',
        color: '#fd3a69',
      },
      {
        name: 'Clean Architecture',
        color: '#4caf50',
      },
      {
        name: 'TypeScript',
        color: '#f7df1e',
      },
      {
        name: 'AWS',
        color: '#f7df1e',
      },
    ],
    image: rental,
    source_code_link: 'https://github.com/sufiyanbmk/Rent-website',
    live_link: 'http://13.201.117.19/',
  },
  {
    name: 'E-COMMERCE WEBSITE',
    description:
      ' Developed a fully functional e-commerce website and an admin panel.Implemented all the necessary e-commerce functionalists like product listing, cart, orders, etc.',
    tags: [
      {
        name: 'Node js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongo DB',
        color: 'green-text-gradient',
      },
      {
        name: 'Express Js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Razarpay',
        color: 'pink-text-gradient',
      },
      {
        name: 'Paypal',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/sufiyanbmk/yarn-collections',
    live_link: 'https://yarn-collections.onrender.com/',
  },
  {
    name: 'AUCTION WEBSITE',
    description:
      'A trading platform for all types of vehicles, including Bank repo seizing, Salvage insurance, Leasing cos, Fleet operators and much more.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: auction,
    source_code_link: 'https://github.com/',
    live_link: 'https://auctionfrontend.riolabz.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
