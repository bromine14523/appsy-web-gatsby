import React, { useState }  from "react"

// const THIS_PAGE = "/";

function ContactForm() {
    // document.querySelector("form").addEventListener("submit", handleSubmit);

    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   let myForm = document.getElementById('contact-form');
    //   let formData = new FormData(myForm)
    //   fetch('http://localhost:1337/requests/contact', {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString()
    //   }).then(() => console.log('Form successfully submitted')).catch((error) =>
    //     alert(error))
    // }


    // document.querySelector("form").addEventListener("submit", handleSubmit);

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     let myForm = document.getElementById('pizzaOrder');
    //     let formData = new FormData(myForm)
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString()
    //     }).then(() => console.log('Form successfully submitted')).catch((error) =>
    //         alert(error))
    // }
    
  return (
    <form 
        className="w-full max-w-lg mx-auto my-4" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact-form"
        id="contact-form"
        // onSubmit={e => handleSubmit(e)}
        // action={THIS_PAGE}
    >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                    Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your name" name="name" />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" />
                <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                </label>
                <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message"></textarea>
                <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
            </div>
        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3">
                <input className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Send" />
            </div>
            <div className="md:w-2/3"></div>
        </div>
    </form>
  )
}

export default ContactForm
