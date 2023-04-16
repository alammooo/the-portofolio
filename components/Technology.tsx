import { techStack } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"
import { Tooltip } from "flowbite-react"

export default function Technology() {
  return (
    <section id="portfolio">
      <div className="mx-auto mt-16 bg-amber-50 px-5 py-10 md:pb-20 md:pt-16 md:max-w-7xl md:px-10">
        <SectionTitle type="stack" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4">
          {techStack.map((el, i) => (
            <div
              className={`flex justify-center border-amber-300 py-16 ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < 6 ? "border-b md:border-b-0" : ""} ${
                i < 4 ? "md:border-b" : ""
              } ${i % 3 === 0 || i % 7 === 0 ? "" : "md:border-r"}`}
              key={i}>
              <Tooltip
                content={el.name}
                style="light">
                <div className="w-20 cursor-pointer text-blue-950 duration-200 hover:text-blue-600">
                  {el.icon}
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
