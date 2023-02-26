import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import NavbarMenu from "./components/NavbarMenu"
import Sidebar from "./components/Sidebar"

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="bg-white animate-loadingInto duration-200"></div>
        </div>
      ) : (
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="w-full">
            <NavbarMenu />
            <Outlet />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
