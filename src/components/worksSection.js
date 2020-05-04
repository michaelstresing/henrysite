import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"


export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
              siteMetadata {
                title
              }
            }
            allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "work"}}}) {
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
                    date(formatString: "MMMM DD, YYYY")
                    description
                  }
                  html
                }
              }
            }
          }
          
    `)

    return (
        <div style={{ margin: `3%`,
                      padding: `0.2rem`,
                      border: `1px solid #E75954`,
                      height: `30vh`,
                      width: `94%`,
                      display: `flex`,
                      overflowX: `scroll`,
                      overflowY: `hidden` }}>
            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div key={node.fields.slug} style={{display: `flex`,
                                                    flexDirection: `column`,
                                                    alignItems: `center`,
                                                    boxShadow: `5px 10px 8px #9A0A35`,
                                                    margin: `20px 20px`,
                                                    padding: `2rem`, 
                                                    backgroundColor: `yellow`,
                                                    borderRadius: `16px`,
                                                    minHeight: `20rem`,
                                                    minWidth: `20rem`,
                                                    whiteSpace: `nowrap` }}>
                    <h3 style={{ marginBottom: rhythm(2) }}>
                        <Link to={`blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ boxShadow: `none`,
                                    color: `black`,
                                    margin: `auto`,
                                    borderBottom: `2px black solid`,
                                    width: `18rem` }}>
                            { title }
                        </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                        dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                        }}
                    />
                </div>
            )
                }
            )}
        </div>
    )
  }
