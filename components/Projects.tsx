import { Carousel } from "flowbite-react"
import SectionTitle from "./utils/SectionTitle"
import Image from "next/image"
import { projectImg } from "@/data/main"
import HeadlessTab from "./utils/HeadlessTab"

export default function Projects() {
  return (
    <section
      className=""
      id="portfolio">
      <div className="mx-auto max-w-7xl px-10 py-10">
        <SectionTitle type="project" />
        <div className="mx-auto mt-8 grid grid-cols-3 gap-7">
          {projectImg.map((el, i) => (
            <div className="flex flex-col justify-between gap-3" key={i}>
              <Image
                className="cursor-pointer border shadow-lg brightness-110 duration-300 hover:scale-105"
                src={el.img}
                alt={`${i}`}
              />
              <div className="flex flex-col gap-3">
                <span className="font-medium text-slate-500 uppercase">{el.company}</span>
                <span className="text-2xl font-semibold text-blue-950 capitalize">{el.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
