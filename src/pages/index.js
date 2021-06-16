import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Main from "../components/main"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      allStrapiRestaurant(filter: {locale: {eq: "en"}}) {
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
  )

  return <Main data={data} />
}


export default IndexPage
