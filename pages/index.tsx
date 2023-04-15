import Image from "next/image"
import Hero from "@/components/Hero"
import React from "react"
import AppContext from "@/context/AppContext"
import Contact from "@/components/contact/Contact"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Head from "next/head"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Technology from "@/components/Technology"

export default function Home() {
  const { sidebarWidth } = React.useContext(AppContext)

  return (
    <>
      <Head>
        <title>Abdullah Alam</title>
      </Head>
      <section
        className={`${
          sidebarWidth ? `md:ml-[${sidebarWidth}px]` : "md:ml-[367px]"
        } flex-1`}>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Technology />
        <Contact />
      </section>
    </>
  )
}
