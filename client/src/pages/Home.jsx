/* eslint-disable react/jsx-no-target-blank */

import { useEffect, useState } from "react"
import { BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { VscGithubInverted } from "react-icons/vsc"
import profilePict from "../assets/images/alam_pict-cropped.jpg"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-5 bg-stone-50">
      <div className="w-80">
        <img
          src={profilePict}
          alt="myPicutre"
          className="animate-morphling border-[9px] border-stone-300 rounded-custom"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-7 animate-fadeInTo">
        <h1 className="font-bold text-6xl uppercase">Abdullah Alam</h1>
        <h2 className="text-gray-500 font-medium text-xl">
          Tech enthusiast with passion for programming, instinct for crafting
          visually stunning websites that provide exceptional user experiences.
        </h2>
        <div className="flex gap-5">
          <div className="w-5">
            <a
              href="https://www.linkedin.com/in/abdullah-alam-07109b1b4"
              target="_blank">
              <BsLinkedin className="w-full h-full hover:fill-blue-600 duration-200" />
            </a>
          </div>
          <div className="w-5">
            <a
              href="https://www.instagram.com/alammoo"
              target="_blank">
              <BsInstagram className="w-full h-full hover:fill-blue-600 duration-200" />
            </a>
          </div>
          <div className="w-5">
            <a
              href="https://github.com/alammooo"
              target="_blank">
              <VscGithubInverted className="w-full h-full hover:fill-blue-600 duration-200" />
            </a>
          </div>
          <div className="w-5">
            <a
              href="https://wa.me/4917661087908"
              target="_blank">
              <BsWhatsapp className="w-full h-full hover:fill-blue-600 duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
