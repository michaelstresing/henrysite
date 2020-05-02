import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import ContactContent from "./contactContent"


export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
            allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
                      overflowX: `scroll`}}>
            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div key={node.fields.slug} style={{ display: `block`,
                                                     margin: `20px 20px`,
                                                     padding: `1rem`, 
                                                     border: `1px solid green`,
                                                     minHeight: `20rem`,
                                                     minWidth: `20rem`}}>
                <h3
                    style={{
                    marginBottom: rhythm(1 / 4),
                    }}
                >
                    <Link
                    style={{ boxShadow: `none`,
                             color: `black`,
                             margin: `auto` }}
                    to={`blog${node.fields.slug}`}
                    state={{
                        modal: true
                    }}
                    >
                    {title}
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
