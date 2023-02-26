import { useEffect, useState } from "react"

export default function ProgressBar({ program, language }) {
  const [percentage, setPercentage] = useState({
    java: 20,
    javascipt: 90,
    php: 50,
    english: 50,
    indonesian: 100,
    german: 100,
  })

  if (program) {
    return (
      <div className="">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">JavaScript</h3>
            <h3 className="mb-1 text-base dark:text-white">90%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-javascript-bar w-[90%]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">Java</h3>
            <h3 className="mb-1 text-base dark:text-white">{percentage.java}%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div
              style={{
                width: percentage.java + "%",
                
              }}
              className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-java-bar"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">PHP</h3>
            <h3 className="mb-1 text-base dark:text-white">50%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-php-bar w-2/5"></div>
          </div>
        </div>
      </div>
    )
  }
  if (language) {
    return (
      <div className="">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">Indonesian</h3>
            <h3 className="mb-1 text-base dark:text-white">100%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-progress-bar"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">English</h3>
            <h3 className="mb-1 text-base dark:text-white">50%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-english-bar w-1/2"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="mb-1 text-base dark:text-white">German</h3>
            <h3 className="mb-1 text-base dark:text-white">100%</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-1 rounded-full dark:bg-gray-300 animate-progress-bar"></div>
          </div>
        </div>
      </div>
    )
  }
}
