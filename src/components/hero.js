import React from "react"
import HeroImage from "../images/hero_image.svg"
import TextLoop from "react-text-loop"

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  We{" "}
                  <TextLoop>
                      <span>create</span>
                      <span>design</span>
                      <span>make</span>
                      <span>develop</span>
                      <span>deliver</span>
                  </TextLoop>{" "}
                  amazing
                </span>
                <span className="block text-indigo-600 xl:inline"> apps</span>
              </h1>
              <div className="wrap">
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  See <a href="#" className="animated">our projects</a> and check what we are good at
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Contact us
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Go to projects
                  </a>
                </div>
              </div>
            </div>
          </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full md:object-contain sm:cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={HeroImage} alt="" />
      </div>
  </div>
  )
}


export default Hero
