import { SectionInterface } from "@/interface/Interface"
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si"
import TravelPack from "@/assets/projects/TravelPack-HR.jpg"
import Alzora from "@/assets/projects/alzora.jpeg"
import KlinikKu from "@/assets/projects/klinikKu.jpeg"
import Easteria from "@/assets/projects/easteria.jpeg"

export const navLinks = [
  "home",
  "about",
  "service",
  "portfolio",
  "blog",
  "contact",
]

export const socialIcon = [
  {
    link: "https://www.linkedin.com/in/abdullah-alamm/",
    icon: <FaLinkedinIn className="h-full w-full" />,
  },
  {
    link: "https://github.com/alammooo",
    icon: <FiGithub className="h-full w-full" />,
  },
  {
    link: "https://www.instagram.com/alammoo/",
    icon: <FaInstagram className="h-full w-full" />,
  },
  {
    link: "https://wa.me/6282122104908?text=I'm%20interested%20for%20the%20service%20",
    icon: <FaWhatsapp className="h-full w-full" />,
  },
]

export const sectionTitle: SectionInterface[] = [
  {
    type: "about",
    sub: "nice to meet you",
    title: "Abdullah Alam",
  },
  {
    type: "experience",
    sub: "experience",
    title: "Everything about me!",
  },
  {
    type: "service",
    sub: "SERVICES",
    title: "My Services",
  },
  {
    type: "project",
    sub: "PROJECTS",
    title: "Recent completed works",
  },
  {
    type: "stack",
    sub: "STACK",
    title: "Available tech stack",
  },
  {
    type: "testimonial",
    sub: "TESTIMONIAL",
    title: "What client's say?",
  },
  {
    type: "blog",
    sub: "BLOG",
    title: "My blog & news",
  },
  {
    type: "contact",
    sub: `LET'S CONNECT`,
    title: "Get in touch",
  },
]

export const experienceData = [
  {
    year: "2018 - Present",
    company: "Envato Market",
    job: "Web Developer",
    description: `Website development is the process of building, programming, coding and maintaining websites and web applications.`,
  },
  {
    year: "2018 - Present",
    company: "Envato Market",
    job: "Web Developer",
    description: `Website development is the process of building, programming, coding and maintaining websites and web applications.`,
  },
  {
    year: "2018 - Present",
    company: "Envato Market",
    job: "Web Developer",
    description: `Website development is the process of building, programming, coding and maintaining websites and web applications.`,
  },
  {
    year: "2018 - Present",
    company: "Envato Market",
    job: "Web Developer",
    description: `Website development is the process of building, programming, coding and maintaining websites and web applications.`,
  },
]

export const serviceData = [
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
  {
    title: "Web Design",
    desc: "Web development is the process of building, programming...",
  },
]

export const techStack = [
  {
    name: "postgresql",
    icon: <SiPostgresql className="h-full w-full" />,
  },
  {
    name: "typescript",
    icon: <SiTypescript className="h-full w-full" />,
  },
  {
    name: "next.js",
    icon: <SiNextdotjs className="h-full w-full" />,
  },
  {
    name: "sequelize",
    icon: <SiSequelize className="h-full w-full" />,
  },
  {
    name: "prisma",
    icon: <SiPrisma className="h-full w-full" />,
  },
  {
    name: "tailwindcss",
    icon: <SiTailwindcss className="h-full w-full" />,
  },
  {
    name: "redux-toolkit",
    icon: <SiRedux className="h-full w-full" />,
  },
  {
    name: "trpc",
    icon: <SiTrpc className="h-full w-full" />,
  },
]

export const projectImg = [
  {
    company: "Hacktiv8",
    name: "travelpack",
    img: TravelPack,
  },
  {
    company: "Hacktiv8",
    name: "Alzora",
    img: Alzora,
  },
  {
    company: "Medica Utama",
    name: "KlinikKu",
    img: KlinikKu,
  },
  {
    company: "Hacktiv8",
    name: "Easteria",
    img: Easteria,
  },
]
