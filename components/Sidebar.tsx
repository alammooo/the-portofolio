import { navLinks, socialIcon } from "@/data/main"
import { Nunito } from "next/font/google"
import React from "react"

const nunito = Nunito({ subsets: ["latin"] })

export default function Sidebar({ setSidebarWidth }: any) {
  const sidebarRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.clientWidth)
    }
  })
  
  return (
    <nav
      title="sidebar"
      className="fixed hidden md:flex"
      ref={sidebarRef}>
      <div className="flex h-screen flex-col justify-between border-r px-14 py-12 text-center">
        <div className="name">
          <h3>
            <span className="relative text-3xl font-bold text-blue-950">
              Abdullah Alam
              <span
                className="absolute -right-10 top-0 -z-10 whitespace-nowrap text-4.5xl font-extrabold text-gray-200"
                style={nunito.style}>
                Abdullah Alam
              </span>
            </span>
          </h3>
        </div>
        <div className="">
          <ul className="flex flex-col gap-7 !text-blue-800 hover:text-blue-500">
            {navLinks.map((el, i) => (
              <li
                className="capitalize"
                key={i}>
                <a href={`#${el}`}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright">
          <div className="social">
            <ul className="mb-7 flex justify-center gap-3">
              {socialIcon.map((el, i) => (
                <li key={i}>
                  <a
                    href={el.link}
                    target="_blank"
                    className="flex justify-center rounded-full bg-blue-50 p-3 text-blue-900">
                    <i className="block w-5">{el.icon}</i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text">
            <p>
              Copyright © 2023 Abdullah Alam. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
