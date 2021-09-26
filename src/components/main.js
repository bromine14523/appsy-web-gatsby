import React from "react"
import Hero from "../components/hero"
import Offer from "../components/offer"
import Projects from "../components/projects"
import ContactUs from "../components/contact_us"
import Testimonials from "../components/testimonials"

export default function Main({data}) {
    return (
      <>
        <Hero heroData={data.strapiListing.hero} />
        <Offer offerData={data.strapiListing.offer} />
        <Projects projectsData={data.strapiListing.projects} />
        <Testimonials testimonialsData={data.strapiListing.testimonials} />
        <ContactUs contactRowData={data.strapiListing.contactRow} />
      </>
    );
}