import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Header({ headerData, languages }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative z-10 bg-white w-full">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">{headerData.srOnly.title}</span>
                  <img className="h-4 w-auto sm:h-6" src={headerData.logoUrl} alt="Logo" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" onClick={() => setIsOpen(!isOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">{headerData.srOnly.openMenu}</span>

                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {headerData.options.map ( (link, index) => (
                <AnchorLink
                  key={index}
                  to={link.href}
                  title={link.text}
                  className={`font-medium ${link.isHighlighted ? "text-indigo-600 hover:text-indigo-500" : "text-gray-500 hover:text-gray-900"}`}
                />
              ))}
                <div className="ml-4 border-2 rounded-md p-2 divide-x-2 inline-block">
                  {languages.map ( (language, index) => (
                    <AnchorLink
                      key={index}
                      to={`${"/" + language.node.name}`}
                      title={language.node.name}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 p-2"
                    />
                  ))}
                </div>
            </div>
          </nav>
        </div>


        <Transition
          show={isOpen}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">

            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">

              <div className="px-5 pt-4 flex items-center justify-between">

                <div>
                  <img className="h-4 w-auto" src={headerData.logoUrl} alt="Logo" />
                </div>
                <div className="-mr-2">
                  <button type="button" onClick={() => setIsOpen(!isOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">{headerData.srOnly.closeMenu}</span>

                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-2 pt-2 pb-3 space-y-1">
                {headerData.options.slice(0, -1).map ( (link, index) => (
                    <AnchorLink
                      key={index}
                      to={link.href}
                      title={link.text}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    />
                ))}
              </div>
                {headerData.options.slice(-1).map ( (link, index) => (
                    <AnchorLink
                      key={index}
                      to={link.href}
                      title={link.text}
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    />
                ))}

                <div className="my-4 mx-auto p-2 divide-x-2 flex justify-center">
                  {languages.map ( (language, index) => (
                    <AnchorLink
                      key={index}
                      to={`${"/" + language.node.name}`}
                      title={language.node.name}
                      className="text-base font-medium text-gray-700 hover:text-gray-900 p-2"
                    />
                  ))}
                </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
</div>
  )
}