import React from "react"
import { graphql, Link } from 'gatsby'

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  
  return (
    <>
      <SEO title="Home" />
      <h4 className="doses tagLine" style={{ textAlign: "center" }}>A blog about the intersection of data science, collaboration, and consciousness.</h4>
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
    </>
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
