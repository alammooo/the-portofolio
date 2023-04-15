import AppContext from "@/context/AppContext"
import Sidebar from "./Sidebar"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({ subsets: ["latin"] })
export default function Layout({ children }: any) {
  const [sidebarWidth, setSidebarWidth] = React.useState(0)
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
