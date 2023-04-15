import AppContext from "@/context/AppContext"
import Sidebar from "./Sidebar"
import { Inter } from "next/font/google"
import React from "react"
import Loader from "./utils/Loader"

const inter = Inter({ subsets: ["latin"] })
export default function Layout({ children }: any) {
  const [sidebarWidth, setSidebarWidth] = React.useState(0)

  // const [loading, setLoading] = React.useState(true)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2450)
  // }, [loading])

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <AppContext.Provider value={{ sidebarWidth }}>
      <main
        className="flex"
        style={inter.style}>
        <Sidebar setSidebarWidth={setSidebarWidth} />
        {children}
      </main>
    </AppContext.Provider>

  )
}
