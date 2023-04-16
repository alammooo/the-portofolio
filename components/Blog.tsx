import { blogTitle } from "@/data/main"
import SectionTitle from "./utils/SectionTitle"
import { IoCalendarOutline } from "react-icons/io5"

export default function Blog() {
  return (
    <section id="blog">
      <div className="mx-auto flex flex-col gap-16 md:my-16 md:max-w-7xl md:flex-row md:px-10 px-5 mt-7 md:mt-0">
        <div className="flex flex-col gap-5 md:w-1/3 md:gap-16">
          <SectionTitle type="blog" />
          <button
            type="button"
            className="ml-3 max-w-fit rounded bg-blue-950 px-10 py-3 font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 md:ml-0">
            Get in touch
          </button>
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          {blogTitle.map((el, i) => (
            <div
              className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0"
              key={i}>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-4 font-medium text-slate-500">
                  <i className="flex h-5 w-5">
                    <IoCalendarOutline className="h-full w-full" />
                  </i>
                  <span className="text-lg">{el.date}</span>
                </span>
                <span className="max-w-sm text-[22px] md:text-2.5xl font-semibold text-blue-950">
                  {el.title}
                </span>
              </div>
              <button className="mt-2 max-w-fit font-medium text-blue-900 md:text-lg">
                Learn More {`->`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
