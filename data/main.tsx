import { SectionInterface } from '@/interface/Interface'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from 'react-icons/si'
import TravelPack from '@/assets/projects/TravelPack-HR.jpg'
import Alzora from '@/assets/projects/alzora.jpeg'
import KlinikKu from '@/assets/projects/klinikKu.jpeg'
import Easteria from '@/assets/projects/easteria.jpeg'
import SalesAppImg from '@/assets/projects/sales-app.jpeg'

export const navLinks = [
  'home',
  'about',
  'service',
  'portfolio',
  'blog',
  'contact',
]

export const socialIcon = [
  {
    link: 'https://www.linkedin.com/in/abdullah-alamm/',
    icon: <FaLinkedinIn className='h-full w-full' />,
  },
  {
    link: 'https://github.com/alammooo',
    icon: <FiGithub className='h-full w-full' />,
  },
  {
    link: 'https://www.instagram.com/alammoo/',
    icon: <FaInstagram className='h-full w-full' />,
  },
  {
    link: "https://wa.me/6282122104908?text=I'm%20interested%20for%20the%20service%20",
    icon: <FaWhatsapp className='h-full w-full' />,
  },
]

export const sectionTitle: SectionInterface[] = [
  {
    type: 'about',
    sub: 'nice to meet you',
    title: 'Abdullah Alam',
  },
  {
    type: 'experience',
    sub: 'experience',
    title: 'Everything about me!',
  },
  {
    type: 'service',
    sub: 'SERVICES',
    title: 'My Services',
  },
  {
    type: 'project',
    sub: 'PROJECTS',
    title: 'Recent completed works',
  },
  {
    type: 'stack',
    sub: 'STACK',
    title: 'Available tech stack',
  },
  {
    type: 'testimonial',
    sub: 'TESTIMONIAL',
    title: "What client's say?",
  },
  {
    type: 'blog',
    sub: 'BLOG',
    title: 'My blog & news',
  },
  {
    type: 'contact',
    sub: `LET'S CONNECT`,
    title: 'Get in touch',
  },
]

export const experienceData = [
  {
    year: '2024 - Present',
    company: 'GolekTruk',
    job: 'Front End Developer',
    description: `Developing web application in branch transportation, currently working with NextJs and TypeScript`,
  },
  {
    year: '2023',
    company: 'Logics Teknologi Informatika',
    job: 'Full Stack Developer',
    description: `Developing full stack web application in branch healthcare, currently working on a cutting-edge project`,
  },
  // {
  //   year: "Self Employee",
  //   company: "Klinik Ku",
  //   job: "Front End Developer",
  //   description: `Construction, design, and development of website`,
  // },
  {
    year: '2020 - 2021',
    company: 'Universitätsmedizin Mainz',
    job: 'IT - Student Assistant',
    description: `Responsible for a range of IT-related tasks, also involved to provide IT support for end-users, databases managment activities and network installation`,
  },
  {
    year: '2018',
    company: 'Yves Rocher',
    job: 'Student Assistant',
    description: `Providing customer advice, managing sales and inventory, participating in marketing and advertising activities, and handling cashiering duties.`,
  },
]

export const serviceData = [
  {
    title: 'Web Development',
    desc: 'Developing web application with best user experience...',
  },
  {
    title: 'Mobile Application',
    desc: 'Mobile Application development, programming...',
  },
  {
    title: 'IT Services',
    desc: 'Providing user IT service with support and...',
  },
  // {
  //   title: "Web Design",
  //   desc: "Web development is the process of building, programming...",
  // },
  // {
  //   title: "Web Design",
  //   desc: "Web development is the process of building, programming...",
  // },
  // {
  //   title: "Web Design",
  //   desc: "Web development is the process of building, programming...",
  // },
]

export const techStack = [
  {
    name: 'postgresql',
    icon: <SiPostgresql className='h-full w-full' />,
  },
  {
    name: 'typescript',
    icon: <SiTypescript className='h-full w-full' />,
  },
  {
    name: 'next.js',
    icon: <SiNextdotjs className='h-full w-full' />,
  },
  {
    name: 'sequelize',
    icon: <SiSequelize className='h-full w-full' />,
  },
  {
    name: 'prisma',
    icon: <SiPrisma className='h-full w-full' />,
  },
  {
    name: 'tailwindcss',
    icon: <SiTailwindcss className='h-full w-full' />,
  },
  {
    name: 'redux-toolkit',
    icon: <SiRedux className='h-full w-full' />,
  },
  {
    name: 'trpc',
    icon: <SiTrpc className='h-full w-full' />,
  },
]

export const projectImg = [
  {
    company: 'Hacktiv8',
    name: 'travelpack',
    img: TravelPack,
  },
  {
    company: 'Hacktiv8',
    name: 'Alzora',
    img: Alzora,
  },
  {
    company: 'Medica Utama',
    name: 'KlinikKu',
    img: KlinikKu,
  },
  {
    company: 'Hacktiv8',
    name: 'Easteria',
    img: Easteria,
  },
  {
    company: 'SalesApp',
    name: 'Sales App',
    img: SalesAppImg,
  },
]

export const blogTitle = [
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
  {
    title: `12 unique examples of portfolio websites`,
    date: 'April 12, 2023',
  },
]
