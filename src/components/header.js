import { Link, useStaticQuery,graphql } from "gatsby"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
          query {
              site {
                siteMetadata {
                  title
                }
              }
              allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "header"}}}) {
                edges {
                  node {
                    excerpt
                    fields {
                      slug
                    }
                    internal {
                      content
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
            }
      `)

  return (
    <header
      style={{
        position: `fixed`,
        border: `1px black solid`,
        margin: `1.2rem`,
        width: `12%`,
      }}>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem`,
        }}>
          <Link
            to="/"
            style={{
              margin: `1.5rem auto`,
              color: `black`,
              textDecoration: `none`,
            }}>
            Henry Drake
          </Link>

          {data.allMdx.edges.map(({ node }) => {
          const title = node.frontmatter.title
            return(
              <Link to={`/blog${node.fields.slug}`}
              state={{ modal: true }}
              style={{  color: `black`,
                        fontSize: `1rem`,
                        textAlign:`center`,
                        border: `1px solid black`,
                        margin: `0.2rem`,
                        textDecoration: `none` }}
                        >
              {title}
              </Link>
          )
        }
          )}
      </div>
    </header>
  )
}