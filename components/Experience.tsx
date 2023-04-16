import { experienceData } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-sky-50">
      <div className="mx-auto md:max-w-7xl md:px-10 py-10 md:py-20">
        <SectionTitle type="experience" />
        <div className="mt-7 grid md:grid-cols-2 gap-10 px-4 md:px-0">
          {experienceData.map((el, i) => (
            <div
              className="bg-white px-7 py-8 md:px-16 md:py-14 shadow-md"
              key={i}>
              <span className="flex justify-between">
                <h6 className="font-semibold text-amber-400">-{el.year}</h6>
                <h6 className="text-lg font-semibold text-blue-800">
                  - {el.company}
                </h6>
              </span>
              <h4 className="text-xl font-extrabold text-blue-900 mb-3 mt-1">
                {el.job}
              </h4>
              <p className="text-zinc-500 leading-8 tracking-wide">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
