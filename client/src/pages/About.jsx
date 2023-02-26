import ProgressBar from "../components/ProgressBar"
import Details from "../components/Details"
import Interest from "../components/Interest"
import Education from "../components/Education"

export default function About() {
  return (
    <div className="">
      <div className="bg-stone-50">
        <div className="flex flex-col max-w-5xl mx-auto py-24 animate-fadeInTo">
          <div>
            <h3 className="bg-gray-100 max-w-fit px-2 text-gray-500 py-2 font-semibold uppercase tracking-wide">
              About
            </h3>
            <h1 className="font-bold text-3xl mt-2">About Me</h1>
            <div className="my-16 overflow-hidden shadow-lg">
              {/* <img src={profilePict} alt="" className="w-full h-full object-cover brightness-110 contrast-110" /> */}
            </div>

            <h2 className="text-2xl font-semibold">Abdullah Alam</h2>
            <h3 className="text-gray-500 text-xl mt-2">
              Full Stack Web Developer, IT-Specialist
            </h3>
            <hr className="my-10 border" />
            <p className="text-gray-500 leading-8 text-lg">
              Hi, my name is Abdullah Alam and I began using WordPress when it first
              began. I’ve spent most of my waking hours for the last ten years designing,
              programming and operating PHP or Javascript sites. <br />
              <br />
              One of my specialties is taking an idea from scratch and creating a
              full-fledged platform. I go beyond to produce sites with a unique,
              outstanding, contemporary look-and-feel. With extensive knowledge of web
              mechanics, I’m able to optimize complex integrations to require little-to-no
              maintenance while running on their own for years.
            </p>
            <hr className="my-10 border" />
          </div>

          <Details />

          <hr className="mt-10 border" />
        </div>
      </div>
      <div className="py-20 flex max-w-5xl mx-auto justify-between gap-10">
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl mb-7">Programming Skill</h1>
          <ProgressBar program={true} />
        </div>
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl mb-7">Language Skill</h1>
          <ProgressBar language={true} />
        </div>
      </div>
      <div className="bg-stone-50 py-20 ">
        <div className="flex max-w-5xl mx-auto justify-between gap-10">
          <Interest />
        </div>
      </div>
      <div className="py-20 flex max-w-5xl mx-auto justify-between gap-3">
        <Education education={true} />
        <Education experience={true} />
      </div>
    </div>
  )
}
