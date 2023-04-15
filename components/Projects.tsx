import { Carousel } from "flowbite-react"
import SectionTitle from "./utils/SectionTitle"
import Image from "next/image"
import { projectImg } from "@/data/main"
import HeadlessTab from "./utils/HeadlessTab"

export default function Projects() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-10 py-10">
        <SectionTitle type="project" />
        <div className="mx-auto mt-8 grid grid-cols-2 max-w-4xl gap-10">
          {projectImg.map((el, i) => (
            <Image
              className="cursor-pointer border shadow-lg"
              src={el}
              key={i}
              alt={`${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
