import { Nunito } from "next/font/google"
import SectionTitle from "./utils/SectionTitle"
const nunito = Nunito({ subsets: ["latin"] })
export default function About() {
  return (
    <section
      id="about"
      className="py-10 md:py-24">
      <div className="mx-auto md:max-w-7xl md:px-10 px-5">
        <div className="flex flex-col md:flex-row">
          <div className="mb-7 flex-1 md:mb-0 md:w-2/5">
            <SectionTitle type="about" />
            <span className="mt-5 block md:ml-0 md:mt-0">
              Full Stack Developer
            </span>
            <button
              type="button"
              className="mt-8 rounded bg-blue-950 px-10 py-3 font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 md:ml-0">
              Got a project?
            </button>
          </div>
          <div className="flex flex-col gap-10 md:w-3/5">
            <p className="leading-loose tracking-wider text-slate-500">
              Hello there! My name is Abdullah Alam. I am a web designer &
              developer, and I&apos;m very passionate and dedicated to my work.
            </p>
            <p className="leading-loose tracking-wider text-slate-500">
              With years experience as a professional a full stack web
              developer, I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the design
              process, from discussion and collaboration.
            </p>
            <div className="flex flex-row flex-wrap gap-5 md:gap-20">
              <div className="flex flex-col gap-3">
                <span className="uppercase text-slate-500 underline">Age</span>
                <span className="text-xl font-bold text-blue-900">27</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="uppercase text-slate-500 underline">Mail</span>
                <span className="text-xl font-bold text-blue-900">
                  abdullah.alam@outlook.de
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="uppercase text-slate-500 underline">
                  Phone
                </span>
                <span className="text-xl font-bold text-blue-900">
                  +62 821-2210-4908
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 grid gap-x-7 gap-y-7 md:grid-cols-3 md:gap-y-0">
          <div className="flex flex-col items-center gap-3 bg-amber-200 py-14 text-blue-950">
            <span className="text-4.5xl font-bold">10+</span>
            <span className="uppercase">IT Years of experience</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-cyan-200 py-14 text-blue-950">
            <span className="text-4.5xl font-bold">50+</span>
            <span className="uppercase">Project Completed</span>
          </div>
          <div className="flex flex-col items-center gap-3 bg-emerald-200 py-14 text-blue-950">
            <span className="text-4.5xl font-bold">5</span>
            <span className="uppercase">Happy client</span>
          </div>
        </div>
      </div>
    </section>
  )
}
