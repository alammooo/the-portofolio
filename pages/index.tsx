import Image from "next/image"
import Hero from "@/components/Hero"
import React from "react"
import AppContext from "@/context/AppContext"
import Contact from "@/components/contact/Contact"

export default function Home() {
  const { sidebarWidth } = React.useContext(AppContext)

  return (
    <section className={`ml-[${sidebarWidth}px] flex-1`}>
      <Hero />
      <Contact />
    </section>
  )
}
