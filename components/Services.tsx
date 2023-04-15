import { serviceData } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"

export default function Services() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex justify-between">
          <SectionTitle type="service" />
          <a
            href="mailto:abdullah.alam@outlook.de"
            className="self-center text-lg font-semibold text-blue-950 underline">
            abdullah.alam@outlook.de
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {serviceData.map((el, i) => (
            <div className="border border-zinc-400 px-10 pt-7 pb-12 flex flex-col gap-5" key={i}>
              <span className="text-lg text-zinc-400">0{i+1}</span>
              <h3 className="text-xl font-bold text-blue-950">{el.title}</h3>
              <p className="tracking-wider leading-8 text-zinc-500">{el.desc}</p>
              <span className="font-medium text-lg text-blue-950">Read More {`->`}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
