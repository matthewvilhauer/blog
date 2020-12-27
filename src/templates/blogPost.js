import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({ data, pathContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const { next, prev } = pathContext

  return (
    <>
      <h1 className="postPageHeader">{title}</h1>
      <div>
        <em>{date}</em>
      </div>

      <br />
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        {prev && (
          <Link to={prev.frontmatter.path}>
            {prev.frontmatter.title} <span role="img" aria-label="point-left">{' '}👈 </span>Previous
          </Link>
        )}
      </p>
      <p>
        {next && (
          <Link to={next.frontmatter.path}>
            Next <span role="img" aria-label="point-right">👉{' '}</span>
            {next.frontmatter.title}
          </Link>
        )}
      </p>
    </>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
