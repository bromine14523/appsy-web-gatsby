import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
    <SEO title="Home" />
    <ul>
      {data.allStrapiRestaurant.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            {document.node.name}
          </h2>
          <p>{document.node.description}</p>
        </li>
      ))}
    </ul>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  );
};

export const query = graphql`  
  query {
    allStrapiRestaurant {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`

export default IndexPage
