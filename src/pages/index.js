import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
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
      minWidth: `319px` 
    }}
  >
    <Layout>
      <SEO title="Home" />
      <h3 style={{ textAlign: "center" }}>The Intersection of Data Science, Collaboration, and Consciousness</h3>
    </Layout>
  </div>
)

export default IndexPage
