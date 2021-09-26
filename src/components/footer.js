import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FooterIcon extends Component {
    render() {
      return (
        <a href={this.props.data.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-300 p-3 transition-all duration-500">
            <FontAwesomeIcon icon={["fab", this.props.data.icon]} size={"lg"} />
        </a>
      )
    }
  }

function Footer({footerData}) {
  return (
    <div className="py-1 bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 flex-col lg:flex-row lg:flex lg:items-center lg:justify-between text-center">
            <div>
              <p className="mt-4 max-w-2xl text-xs text-gray-500">
                  © {new Date().getFullYear()} APPSY, {footerData.copyright}
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex mx-auto">
                  {
                    footerData.socials.map((social, index) => <FooterIcon key={index} data={social} />)
                  }
                </div>
            </div>
        </div>
      </div>
  )
}

export default Footer
