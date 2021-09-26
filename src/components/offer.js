import React, { Component }  from "react"

class OfferBox extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-col bg-gray-50 rounded-md p-8 shadow-xl">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white -mt-12">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        </div>
        <p className="text-lg leading-6 font-medium text-gray-900 mt-5">{this.props.data.name}</p>
        <p className="mt-4 text-base text-gray-500 text-center">
          {this.props.data.description}
        </p>
    </div>
    )
  }
}

function Offer({offerData}) {
  return (
    <div className="mt-8 py-12 relative overflow-hidden" id="whatwedo">
      <div className="absolute w-full h-full transform -skew-y-3 bg-gray-50 origin-bottom-right top-0 bottom-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-4">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase" id="whatwedo">{offerData.sectionName}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {offerData.sectionMainTitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {offerData.sectionMainDescription}
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {offerData.options.map((option, index) => <OfferBox key={index} data={option} />)}
            </dl>
          </div>
        </div>
      </div>
  )
}


export default Offer
