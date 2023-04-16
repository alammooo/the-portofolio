import { serviceData } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"

export default function Services() {
  return (
    <section
      className="py-10 md:py-16"
      id="service">
      <div className="mx-auto md:max-w-7xl md:px-10">
        <div className="flex flex-col justify-between md:flex-row">
          <SectionTitle type="service" />
          <a
            title="mail-to-me"
            href="mailto:abdullah.alam@outlook.de"
            className="px-10 text-lg font-semibold text-blue-950 underline md:self-center md:px-0">
            abdullah.alam@outlook.de
          </a>
        </div>
        <div className="mt-8 grid gap-8 px-4 md:grid-cols-3 md:px-0">
          {serviceData.map((el, i) => (
            <div
              className="flex flex-col gap-5 border border-zinc-400 px-7 pb-12 pt-7 md:px-10"
              key={i}>
              <span className="text-lg text-zinc-400">0{i + 1}</span>
              <h3 className="text-xl font-bold text-blue-950">{el.title}</h3>
              <p className="leading-8 tracking-wider text-zinc-500">
                {el.desc}
              </p>
              <span className="text-lg font-medium text-blue-950">
                Read More {`->`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
