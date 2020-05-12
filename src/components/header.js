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

  const linkSyle = {  color: `black`,
                      fontSize: `1rem`,
                      textAlign:`center`,
                      border: `1px solid black`,
                      margin: `0.2rem`,
                      textDecoration: `none` }
  return (
    <header
      style={{
        position: `fixed`,
        margin: `1rem`,
        width: `12%`,
        maxWidth:`10rem`
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
              fontWeight:`bolder`
            }}>
            Henry Drake
          </Link>

          {data.allMdx.edges.map(({ node }) => {
          const title = node.frontmatter.title
            return(
              <Link to={`/blog${node.fields.slug}`}
                    state={{ modal: true }}
                    style={linkSyle}>
                {title}
              </Link>
              ) 
            }
          )
        }
        <Link
          to="/#works"
          style={linkSyle}>Works </Link>
        <Link
          to="/#writing"
          style={linkSyle}>Writing</Link>

      </div>
    </header>
  )
}