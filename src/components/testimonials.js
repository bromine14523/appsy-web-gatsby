import React from "react"
import TestimonialsCarousel from "./testimonials_carousel"

function Testimonials({testimonialsData}) {
  return (
    <div className="py-12 relative overflow-hidden">
        <div className="absolute w-full h-full transform skew-y-3 bg-gray-50 origin-top-left top-0 bottom-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {testimonialsData.sectionTitle}
            </p>
          </div>

          <div className="mt-10">
            <TestimonialsCarousel testimonials={testimonialsData.testimonials} />
          </div>
        </div>
      </div>
  )
}


export default Testimonials
