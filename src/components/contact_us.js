import React from "react"

function ContactUs({contactRowData}) {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-center lg:text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">{contactRowData.blackText}</span>
                    <span className="block text-indigo-600">{contactRowData.coloredText}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href={contactRowData.contactButton.href} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        {contactRowData.contactButton.text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
      