import React from "react"
import { graphql } from "gatsby";
import Main from "../components/main"
import Layout from "../components/layout"

export default function Locale({ data }) {
    return (
      <Layout headerData={data.strapiListing.navigation} footerData={data.strapiListing.footer} languagesData={data.allStrapiLanguage.edges}>
        <Main data={data} />
      </Layout>
    );
}

export const query = graphql`
  query LocaleQuery($locale: String) {
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
      hero {
        imgUrl,
        aboveButtonsSentence {
          leftPart,
          rightPart,
          animatedLink {
            text,
            href
          }
        },
        leftButton {
          href,
          text
        },
        rightButton {
          href,
          text
        },
        titleSentence {
          sentenceEnd,
          sentenceOptions,
          sentenceStart,
          sentenceWhat
        }
      },
      offer {
        sectionName,
        sectionMainTitle,
        sectionMainDescription,
        options {
          name,
          description
        }
      },
      footer {
        copyright,
        socials {
          icon,
          href
        }
      },
      contactRow {
        blackText,
        coloredText,
        contactButton {
          href,
          text
        }
      },
      testimonials {
        sectionTitle,
        testimonials {
          avatarUrl,
          text,
          position,
          name
        }
      },
      projects {
        sectionName,
        sectionTitle,
        sectionDescription,
        projects {
          href,
          imgUrl,
          projectCategory,
          projectTitle,
          tags
        }
      }
    }
  }
`