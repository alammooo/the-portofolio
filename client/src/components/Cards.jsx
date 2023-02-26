/* eslint-disable react/jsx-no-target-blank */

import Skeleton from "./Skeleton"

import restaurant from "../assets/images/restaurant.jpg"
import news from "../assets/images/whis-news.jpg"
import medicalia from "../assets/images/medicalia.jpg"
import klinik from "../assets/images/klinik-ku.jpg"
import landing from "../assets/images/landingPage.jpg"
import employee from "../assets/images/employeeApp.jpg"

export default function Cards() {
  return (
    <>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Easteria</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://easteria-restaurant-hacktiv8.web.app/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={restaurant}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Whis News</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://whis-news.web.app/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={news}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Medicalia</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://medicalia-hacktiv8.web.app/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={medicalia}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Klinik Ku</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://www.klinik-ku.com/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={klinik}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Landing Page</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://www.klinik-ku.com/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={landing}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="backdrop-blur-2xl backdrop-opacity-5 border-2 p-5 shadow-lg">
        <h1 className="text-center font-medium text-2xl mb-5">Employees App</h1>
        <div className="w-full shadow-lg bg-white">
          <a
            href="https://www.klinik-ku.com/"
            target="_blank">
            <img
              onLoad={() => {
                return <Skeleton />
              }}
              src={employee}
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
    </>
  )
}
