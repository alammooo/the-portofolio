import Hero from "@/components/Hero"
import React from "react"
import Contact from "@/components/contact/Contact"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Head from "next/head"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Technology from "@/components/Technology"
import Sidebar from "@/components/Sidebar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullah Alam | Full Stack Developer</title>
      </Head>
      <main
        className="md:flex"
        style={inter.style}>
        <Sidebar />
        <section className={`duration-500 md:flex-1`}>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Technology />
          <Contact />
        </section>
      </main>
    </>
  )
}
