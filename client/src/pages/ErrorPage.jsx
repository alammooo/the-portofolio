import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className=" bg-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 items-center justify-center min-h-screen">
        <h1 className="text-4xl font-semibold">Oops!</h1>
        <p className="text-5xl font-light">Sorry, an unexpected error has occurred.</p>
        <p className="text-4xl font-medium">
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to={"/"} className="text-xl text-white bg-stone-700 px-4 py-2 mt-5">
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}
