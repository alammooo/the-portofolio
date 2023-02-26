import { FcNext } from "react-icons/fc";

export default function Interest() {
  return (
    <>
      <div className="w-1/2">
        <h1 className="font-semibold text-2xl mb-7">Knwoledge</h1>
        <ul className="text-gray-500">
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li> Bootstrap, Tailwind, Sass</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>React, Vue, Laravel</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Sequelize, GraphQL, MongoDB</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>EJS, JQuery, React Native</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Server Side</li>
          </div>
        </ul>
      </div>
      <div className="w-1/2">
        <h1 className="font-semibold text-2xl mb-7">Interest</h1>
        <ul className="text-gray-500">
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Designing Website</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Creating Mobile App</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Costumize Website</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Backend with Create Read Edit Delete</li>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FcNext />
            <li>Hardware Building</li>
          </div>
        </ul>
      </div>
    </>
  )
}
