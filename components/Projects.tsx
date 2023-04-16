import SectionTitle from "./utils/SectionTitle"
import Image from "next/image"
import { projectImg } from "@/data/main"

export default function Projects() {
  return (
    <section
      className=""
      id="portfolio">
      <div className="mx-auto max-w-7xl py-10 md:px-10 ">
        <SectionTitle type="project" />
        <div className="mx-auto mt-8 grid gap-7 px-5 md:grid-cols-3 md:px-0">
          {projectImg.map((el, i) => (
            <div
              className="flex flex-col justify-between gap-3 "
              key={i}>
              <Image
                className="cursor-pointer border shadow-lg duration-300 hover:scale-105"
                src={el.img}
                alt={`${i}`}
              />
              <div className="flex flex-col gap-3">
                <span className="font-medium uppercase text-slate-500">
                  {el.company}
                </span>
                <span className="text-2xl font-semibold capitalize text-blue-950">
                  {el.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
