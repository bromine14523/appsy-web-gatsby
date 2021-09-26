import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="py-12">
      <div className="max-w-2xl flex flex-col sm:flex-row justify-center mx-auto align-center divide-x-0 sm:divide-x">
          <h2 className="text-4xl p-4 text-indigo-600 font-black tracking-wide uppercase text-center sm:text-left">404</h2>
          <div className="flex flex-col p-4">
            <p className="text-3xl font-extrabold text-gray-900 text-center sm:text-left">
              Page not found
            </p>
            <p className="text-sm sm:text-base text-gray-500 text-center sm:text-left">
              Please check the URL in the address bar and try again.
            </p>
            <div className="flex mt-4 mx-auto sm:mx-0">
              <a href="/" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Go back home
              </a>
            </div>
          </div>
      </div>
    </div>
 </>
)

export default NotFoundPage
