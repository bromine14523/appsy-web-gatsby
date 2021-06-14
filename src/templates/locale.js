import React from "react"
import { graphql } from "gatsby";
import Main from "../components/main"

export default function Locale({ data }) {
    return <Main data={data} />;
}

export const query = graphql`
  query LocaleQuery($locale: String) {
    allStrapiRestaurant(filter: {locale: {eq: $locale}}) {
      edges {
        node {
          id
          name
          description
          locale
        }
      }
    }
  }
`