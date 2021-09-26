import React from "react"

const functionURL = "https://appsy-web-strapi.herokuapp.com/requests/contact"

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: true,
            message: { fromEmail: "", body: "" },
            errors: { fromEmail: false, body: false },
            submitting: false,
            submittingError: null,
            isFormValid: false,
            wasSubmittedSuccessfully: false
        }
    }

    validateForm = () => {
        let emailValidationMessage = this.validateEmail();
        let bodyValidationMessage = this.validateBody();

        this.setState({
            errors: {
                fromEmail: emailValidationMessage, 
                body: bodyValidationMessage
            },
            submitting: false,
            isFormValid: !(this.isEmpty(emailValidationMessage) && !this.isEmpty(bodyValidationMessage))
        });
    }

    isNotEmpty = (variable) => variable !== "" && variable !== undefined;
    isEmpty = (variable) => variable === "" || variable === undefined;
    validateEmailString = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    validateEmail = () => {
        if (this.isEmpty(this.state.message.fromEmail)) {
            return this.props.contactFormData.errors.emptyField;
        } else if(!this.validateEmailString(this.state.message.fromEmail)) {
            return this.props.contactFormData.errors.wrongFormat;
        }

        return "";
    }

    validateBody = () => {
        if (this.isEmpty(this.state.message.body)) {
            return this.props.contactFormData.errors.emptyField;
        }

        return "";
    }

    onClick = async event => {
        event.preventDefault()

        if (this.state.isFormValid) {
            this.setState({ submitting: true })
            const { fromEmail, body } = this.state.message

            const response = await fetch(functionURL, {
                method: "post",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
                body: new URLSearchParams({ fromEmail, body }).toString(),
            })
            if (response.status === 200) {
                this.setState({
                    submittingError: null,
                    submitting: false,
                    message: {
                        fromEmail: "",
                        body: "",
                    },
                    wasSubmittedSuccessfully: true
                })
            } else {
                const json = await response.json()
                this.setState({
                    submittingError: json.error,
                    submitting: false,
                })
            }
        }
    }

    onChange = event => {
        const name = event.target.getAttribute("name")
        this.setState({
            message: { ...this.state.message, [name]: event.target.value },
        })

        this.validateForm();
    }

    render() {
        return (
            <>
            { this.state.wasSubmittedSuccessfully ?
                <div className="flex flex-col items-center justify-center">
                    <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.293 468.293">
                        <circle cx="234.146" cy="234.146" r="234.146" fill="#44c4a1"/>
                        <path fill="#ebf0f3" d="M357.52 110.145L191.995 275.67l-81.222-81.219-41.239 41.233 122.461 122.464 206.764-206.77z"/>
                    </svg>
                    <p className="text-xl font-bold mt-4">
                        {this.props.contactFormData.thanksForReachingOut}
                    </p>
                    <p className="text-lg text-gray-400">
                        {this.props.contactFormData.expectOurResponse}
                    </p>
                    <a className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto mt-8" href={this.props.contactFormData.homeBtn.href}>{this.props.contactFormData.homeBtn.name}</a>
                </div>
                :
                <>
                <h1>{this.props.contactFormData.seoTitle}</h1>
                <div className="text-red-500 text-xs italic">{this.state.submittingError}</div>
                <form
                    className="w-full max-w-lg mx-auto my-4"
                    method="POST"
                    name="contact-form"
                    id="contact-form"
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                {this.props.contactFormData.email}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                name="fromEmail"
                                value={this.state.message.fromEmail}
                                onChange={this.onChange}
                            />
                            <p className="text-red-500 text-xs italic">
                                { this.isNotEmpty(this.state.errors.fromEmail) ? this.state.errors.fromEmail : "" }
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                {this.props.contactFormData.message}
                            </label>
                            <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="grid-message"
                                name="body"
                                value={this.state.message.body}
                                onChange={this.onChange}
                            ></textarea>
                            <p className="text-red-500 text-xs italic">
                                { this.isNotEmpty(this.state.errors.body) ? this.state.errors.body : "" }
                            </p>
                        </div>
                    </div>
                    <div className={this.state.submitting ? "hidden" : "md:flex md:items-center"}>
                        <div className="md:w-1/3">
                            <input className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                value={this.props.contactFormData.send}
                                disabled={this.state.submitting}
                                onClick={this.onClick}
                            />
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    <div className={this.state.submitting ? "md:flex md:items-center" : "hidden"}>
                        <div className="md:w-1/3">
                        <button type="button" className="inline-flex items-center shadow bg-indigo-600 text-white font-bold py-2 px-4 rounded" disabled>
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75 bg-indigo-200" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {this.props.contactFormData.processing}
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
                </>
            }
            </>
        )
    }
}

export default ContactForm
