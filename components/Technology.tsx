import { techStack } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"
import { Tooltip } from "flowbite-react"

export default function Technology() {
  return (
    <section>
      <div className="mx-auto md:max-w-7xl md:px-10 py-20">
        <SectionTitle type="stack" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4">
          {techStack.map((el, i) => (
            <div
              className={`flex justify-center border border-l-0 border-t-0 border-amber-300 py-16 ${
                i === 3 || i === 7 ? "border-r-0" : "border-r"
              } ${i > 3 ? "border-b-0" : ""}`}
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
