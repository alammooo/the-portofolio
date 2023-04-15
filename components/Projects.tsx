import { Carousel } from "flowbite-react"
import SectionTitle from "./utils/SectionTitle"
import Image from "next/image"
import { projectImg } from "@/data/main"

export default function Projects() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-10 py-10">
        <SectionTitle type="project" />
        <div className="mx-auto grid grid-cols-3 gap-10 mt-8">
          
            {projectImg.map((el, i) => (
              <Image
              className="shadow border"
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
