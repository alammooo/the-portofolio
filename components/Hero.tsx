import { Nunito } from "next/font/google"
import HeroImg from "@/assets/svg/heroimg.svg"
import Image from "next/image"
const nunito = Nunito({ subsets: ["latin"] })

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-amber-50 bg-opacity-90">
      <div className="mx-auto flex h-full items-center px-4 py-5 md:max-w-7xl md:px-10 md:py-0">
        <div className="flex flex-col gap-16 md:w-7/12 md:gap-36">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-extrabold leading-tight text-blue-950 md:!leading-normal 2xl:text-6xl">
              Hi I&apos;m <span className="text-blue-600">Alam!</span> <br />{" "}
              Full Stack{" "}
              <span className="underline decoration-blue-600 decoration-wavy underline-offset-4 md:underline-offset-[16px]">
                Developer
              </span>{" "}
              Based in Indonesia
            </h1>
            <p className="max-w-md leading-loose tracking-wide">
              I&apos;m an Indonesian based full stack developer with years of
              experience with basic of computer engineer
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <button
                type="button"
                className="rounded bg-blue-950 px-10 py-3 font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700">
                Got a project?
              </button>
              <button
                type="button"
                className="rounded border border-blue-950 px-10 py-3 font-medium text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:border-blue-600 dark:bg-blue-800 dark:text-white dark:hover:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700">
                Lets Talk
              </button>
            </div>
          </div>
          <div
            className="flex flex-col gap-1.5 border-l-4 border-blue-600 pl-3 text-lg"
            style={nunito.style}>
            <span className="font-semibold tracking-wider text-blue-950">
              +62 821-2210-4908
            </span>
            <span className="font-semibold tracking-wider text-blue-950">
              abdullah.alam@outlook.de
            </span>
            <span className="font-semibold tracking-wider text-blue-950">
              Pondok Bukit Agung, Semarang
            </span>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={HeroImg}
            alt="heroimg"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
