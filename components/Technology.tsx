import { techStack } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"
import { Tooltip } from "flowbite-react"

export default function Technology() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-10 py-16">
        <SectionTitle type="stack" />
        <div className="mt-20 grid md:grid-cols-4">
          {techStack.map((el, i) => (
            <div className="border border-amber-400 py-16 flex justify-center">
              <Tooltip
                content={el.name}
                style="light">
                <div
                  key={i}
                  className="w-20 text-blue-950 duration-200 hover:text-blue-600 cursor-pointer">
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
