import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-amber-50 bg-opacity-90">
      <div className="mx-auto flex h-full max-w-7xl items-center px-10">
        <div className="flex w-1/2 flex-col gap-36">
          <div className="flex flex-col gap-7">
            <h1 className="text-6xl font-extrabold leading-snug text-blue-950">
              Hi I&apos;m <span className="text-blue-600">Alam!</span> <br /> Full
              Stack{" "}
              <span className="underline decoration-blue-600 decoration-wavy underline-offset-[14px]">
                Developer
              </span>{" "}
              Based in Indonesia
            </h1>
            <p className="max-w-md leading-loose tracking-wide">
              I&apos;m an Indonesian based full stack developer with years of
              experience with basic of computer engineer
            </p>
            <div className="flex gap-5">
              <button
                type="button"
                className="rounded bg-blue-950 px-10 py-2.5 font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700">
                Got a project?
              </button>
              <button
                type="button"
                className="rounded border border-blue-950 px-10 py-2.5 font-medium text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:border-blue-600 dark:bg-blue-800 dark:text-white dark:hover:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700">
                Lets Talk
              </button>
            </div>
          </div>
          <div
            className="flex flex-col gap-1.5 border-l-4 border-blue-600 pl-3 text-lg"
            style={nunito.style}>
            <a
              href=""
              className="font-semibold tracking-wider text-blue-950">
              +62 821-2210-4908
            </a>
            <a
              href=""
              className="font-semibold tracking-wider text-blue-950">
              abdullah.alam@outlook.de
            </a>
            <a
              href=""
              className="font-semibold tracking-wider text-blue-950">
              Pondok Bukit Agung, Semarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
