import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGoogle, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import "./../css/layout.css"
import Footer from "../components/footer"
import Header from "../components/header"

library.add(faFacebook, faGoogle, faInstagram, faTwitter)

const Layout = ({ children, headerData, footerData, languagesData }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} headerData={headerData} languages={languagesData} />
        {children}
      <Footer footerData={footerData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
