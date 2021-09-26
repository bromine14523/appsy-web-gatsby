import React from "react"
import { TextLoop } from "react-text-loop-next"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero({ heroData }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    {heroData.titleSentence.sentenceStart}
                    <TextLoop>
                        { heroData.titleSentence.sentenceOptions.map( (el, index) => (<span key={index}>{el}</span>)) }
                    </TextLoop>
                    {heroData.titleSentence.sentenceEnd}
                  </span>
                  <span className="block text-indigo-600 xl:inline">{heroData.titleSentence.sentenceWhat}</span>
                </h1>
                <div className="wrap">
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    {heroData.aboveButtonsSentence.leftPart} 
                    <AnchorLink
                      to={heroData.aboveButtonsSentence.animatedLink.href}
                      title={heroData.aboveButtonsSentence.animatedLink.text}
                      className="animated"
                    />
                    {heroData.aboveButtonsSentence.rightPart}
                  </p>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href={heroData.leftButton.href} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      {heroData.leftButton.text}
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <AnchorLink
                      to={heroData.rightButton.href}
                      title={heroData.rightButton.text}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    />
                  </div>
                </div>
              </div>
            </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="hidden lg:block h-56 w-full md:object-contain sm:cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={heroData.imgUrl} alt="" />
      </div>
    </div>
  )
}

export default Hero
