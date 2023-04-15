import Image from "next/image"
import Hero from "@/components/Hero"
import React from "react"
import AppContext from "@/context/AppContext"
import Contact from "@/components/contact/Contact"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Head from "next/head"

export default function Home() {
  const { sidebarWidth } = React.useContext(AppContext)

  return (
    <>
      <Head>
        <title>Abdullah Alam</title>
      </Head>
      <section
        className={`${
          sidebarWidth ? `ml-[${sidebarWidth}px]` : "ml-[367px]"
        } flex-1`}>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </section>
    </>
  )
}
