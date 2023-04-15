import { SectionInterface } from "@/interface/Interface"
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

export const navLinks = [
  "home",
  "about",
  "service",
  "portfolio",
  "news",
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
    type: "client",
    sub: "CLIENTS",
    title: "Customers & clients",
  },
  {
    type: "testimonial",
    sub: "TESTIMONIAL",
    title: "What client&apos;s say?",
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
