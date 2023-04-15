import { Nunito } from "next/font/google"
import SectionTitle from "./utils/SectionTitle"
const nunito = Nunito({ subsets: ["latin"] })
export default function About() {
  return (
    <section
      id="about"
      className="py-20">
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex">
          <div className="w-2/5 flex-1">
            <SectionTitle type="about" />
            <span className="block">Full Stack Developer</span>
            <button
              type="button"
              className="mt-7 rounded bg-blue-950 px-10 py-2.5 font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700">
              Default
            </button>
          </div>
          <div className="flex w-3/5 flex-col gap-10">
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
            <div className="flex gap-7">
              <div className="flex flex-col gap-3">
                <h5>Age</h5>
                <h6>27</h6>
              </div>
              <div className="flex flex-col gap-3">
                <h5>Mail</h5>
                <h6>abdullah.alam@outlook.de</h6>
              </div>
              <div className="flex flex-col gap-3">
                <h5>Phone</h5>
                <h6>+62 821-2210-4908</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-12 gap-x-7">
          <div className="flex flex-col items-center bg-amber-100 text-blue-950 py-16 gap-3">
            <span className="text-4.5xl font-bold">10+</span>
            <span className="uppercase">Yeaars of Experience</span>
          </div>
          <div className="flex flex-col items-center bg-amber-100 text-blue-950 py-16 gap-3">
            <span className="text-4.5xl font-bold">10+</span>
            <span className="uppercase">Yeaars of Experience</span>
          </div>
          <div className="flex flex-col items-center bg-amber-100 text-blue-950 py-16 gap-3">
            <span className="text-4.5xl font-bold">10+</span>
            <span className="uppercase">Yeaars of Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
