import { navLinks, socialIcon } from "@/data/main"
import { Kristi, Nunito } from "next/font/google"
import React from "react"
import ProfilePict from "@/assets/my-pict.jpg"
import Image from "next/image"

const kristi = Kristi({ subsets: ["latin"], weight: "400" })

export default function Sidebar() {

  return (
    <nav className={`md:mr-[320px] 2xl:mr-[370px] hidden md:flex h-screen`}>
      <div
        className="fixed flex h-screen md:w-[320px] 2xl:w-[370px] flex-col justify-between border-r md:px-10 2xl:px-14 py-12 text-center"
        id="sidebar">
        <div className="name">
          <i className="mx-auto mb-4 mt-1 flex aspect-square w-32">
            <Image
              src={ProfilePict}
              alt="my-pict"
              className="rounded-full object-cover brightness-110"
            />
          </i>
          <h3>
            <span className="relative text-3xl font-bold text-blue-950">
              Abdullah Alam
              <span
                className="absolute -right-7 -top-5 -z-10 whitespace-nowrap text-7xl font-extrabold text-gray-200"
                style={kristi.style}>
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
          <div className="text-slate-500">
            <p className="">
              Copyright © 2023 Abdullah Alam. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
