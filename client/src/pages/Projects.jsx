import Cards from "../components/Cards"

export default function Projects() {
  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        <div className="flex flex-col mx-auto py-24 animate-fadeInTo px-32">
          <div>
            <h3 className="bg-gray-100 max-w-fit px-2 text-gray-500 py-2 font-semibold uppercase tracking-wide">
              Projects
            </h3>
            <div className="flex justify-between items-center mt-3">
              <h1 className="font-bold text-3xl">Running Projects</h1>
              <ul className="flex gap-5 text-lg">
                <li>All</li>
                <li>Health</li>
                <li>Restaurant</li>
                <li>Travel</li>
                <li>Basic</li>
              </ul>
            </div>
            <div className="cards grid 2xl:grid-cols-3 grid-cols-2 gap-5 mt-20">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
