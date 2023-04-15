import Image from "next/image"
import Hero from "@/components/Hero"
import React from "react"
import AppContext from "@/context/AppContext"
import Contact from "@/components/contact/Contact"
import About from "@/components/About"

export default function Home() {
  const { sidebarWidth } = React.useContext(AppContext)

  return (
    <section
      className={`${
        sidebarWidth ? `ml-[${sidebarWidth}px]` : "ml-[367px]"
      } flex-1`}>
      <Hero />
      <About />
      <Contact />
    </section>
  )
}
