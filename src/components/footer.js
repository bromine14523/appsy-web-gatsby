import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FooterIcon extends Component {
    render() {
      return (
        <a href="#" className="text-gray-400 hover:text-gray-300 p-3 transition-all duration-500">
            <FontAwesomeIcon icon={["fab", this.props.icon]} size={"lg"} />
        </a>
      )
    }
  }

function Footer() {
  return (
    <div className="py-1 bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <p className="mt-4 max-w-2xl text-xs text-gray-500">
                © 2021 APPSY, All rights reserved
            </p>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex">
                    <FooterIcon icon={"facebook"} />
                    <FooterIcon icon={"google"} />
                    <FooterIcon icon={"twitter"} />
                    <FooterIcon icon={"instagram"} />
                </div>
            </div>
        </div>
      </div>
  )
}

export default Footer
