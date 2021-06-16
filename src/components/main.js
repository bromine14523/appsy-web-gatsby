import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Header from "../components/header"
import Hero from "../components/hero"
import Offer from "../components/offer"
import Projects from "../components/projects"
import Footer from "../components/footer"
import ContactUs from "../components/contact_us"
import ContactForm from "../components/contact_form"

// const DEFAULT_LANGUAGE = "en"

function Main({data}) {
    // const lang = data.allStrapiRestaurant.edges[0].node.locale;
    // let lang2 = lang == DEFAULT_LANGUAGE || lang == null || lang == undefined ? "pl" : "en";

    return (
      <div>
        {/* <Link to={"/" + lang2}>{lang2}</Link>
        <ul>
          {data.allStrapiRestaurant.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                {document.node.name}
              </h2>
              <p>{document.node.description}</p>
            </li>
          ))}
        </ul> */}
        <ContactForm />
        <Header />
        <Hero />
        <Offer />
        <Projects />
        <ContactUs />
        <Footer />
      
      </div>
    );
}

export default Main
