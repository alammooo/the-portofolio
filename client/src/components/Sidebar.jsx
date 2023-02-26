import { NavLink } from "react-router-dom"
import { SiReact, SiTailwindcss } from "react-icons/si"
import { useEffect, useRef, useState } from "react"

export default function Sidebar() {
  const [navWidth, setNavWidth] = useState(0)
  const handleActive = ({ isActive }) => {
    if (isActive) return "text-blue-600"
  }

  useEffect(() => {
    const nav = document.getElementById("theNav")
    setNavWidth(nav.offsetWidth)
  }, [])

  return (
    <div
      id="theNav"
      className={`border-r 
      hidden lg:flex lg:px-10 xl:min-w-fit 2xl:pl-20 2xl:pr-52 ${
        navWidth ? `mr-[${navWidth}]` : ""
      }`}>
      <div className="fixed h-screen flex-col gap-24 justify-center flex bg-white text-lg">
        <div className="flex flex-col gap-3">
          <NavLink
            to={"/"}
            className={handleActive}>
            Home
          </NavLink>
          <NavLink
            to={"/projects"}
            className={handleActive}>
            Project
          </NavLink>
          <NavLink
            to={"/about"}
            className={handleActive}>
            About
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={handleActive}>
            Contact
          </NavLink>
        </div>
        <div className="text-base font-light text-gray-500 flex flex-col gap-1">
          <h1 className="">© Abdullah Alam</h1>
          <h1 className="">Made with</h1>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">React</h1>
            <div className="w-16">
              <SiReact
                size="24px"
                className="animate-spin-slow"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">Tailwind</h1>
            <div className="w-5">
              <SiTailwindcss
                size="24px"
                className="hover:animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
