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

export default function Home() {

  return (
    <>
      <Head>
        <title>Abdullah Alam</title>
      </Head>
      <main className="md:flex">
        <Sidebar/>
        <section className={`duration-300`}>
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
