import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact_form"

export default function Locale({ data }) {
    return (
      <Layout headerData={data.strapiListing.navigation} footerData={data.strapiListing.footer} languagesData={data.allStrapiLanguage.edges}>
        <SEO title={data.strapiListing.contactForm.seoTitle} />
        <div className="max-w-7xl mx-auto p-12 flex flex-col">
            <ContactForm contactFormData={data.strapiListing.contactForm} />
        </div>
      </Layout>
    );
}

export const query = graphql`
  query ContactLocaleQuery($locale: String) {
    allStrapiLanguage(filter: {isActive: {eq: true}}) {
      edges {
        node {
          name
        }
      }
    },
    strapiListing(locale: {eq: $locale}) {
      navigation {
        options {
          href
          isHighlighted
          text
        },
        srOnly {
          title,
          openMenu,
          closeMenu
        },
        logoUrl
      },
      contactForm {
        seoTitle,
        errors {
            emptyField,
            wrongFormat
        },
        thanksForReachingOut,
        expectOurResponse,
        email,
        message,
        processing,
        send,
        homeBtn {
            name,
            href
        }
      },
      footer {
        copyright,
        socials {
          icon,
          href
        }
      }
    }
  }
`