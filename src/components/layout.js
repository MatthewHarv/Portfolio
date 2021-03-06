/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../components/css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"data.site.siteMetadata?.title || `Title`"} />
      <div>
        <main>{children}</main>
        <footer>
          <div></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
