/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
    <div 
      className="App"
      style={{ 
        display: `flex`,
        flexDirection: `column`,
        position: `absolute`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: `hidden`,
        minWidth: `360px` 
      }}
    >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `16px auto`,
            maxWidth: 960,
            padding: `0 16px`,
            width: `100%`,
            overflowY: `auto`
          }}
        >
          <main>{children}</main>
        </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
