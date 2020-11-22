import React from "react"
import { graphql, Link } from 'gatsby'

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  
  return (
    <div
      style={{
        margin: `16px auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <SEO title="Home" />
      <h3 className="Doses" style={{ textAlign: "center", marginTop: "16px" }}>The Intersection of Data Science, Collaboration, and Consciousness</h3>
      <div>
        {edges.map(edge => {
          const { frontmatter, html } = edge.node
          
          return (
            <div key={frontmatter.path}>
              <h2 style={{ margin: "0px" }}><Link to={frontmatter.path} className="homePagePostHeader">{frontmatter.title}</Link></h2>
              <small>
                {frontmatter.date}
              </small>
              <p><em>{frontmatter.excerpt}</em></p>
              <div className="blogpost" style={{ paddingTop: "0px" }} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
