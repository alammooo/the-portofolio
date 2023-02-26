import { useEffect, useState } from "react"

export default function Loader() {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white animate-loadingInto duration-200"></div>
    </div>
  )
}
