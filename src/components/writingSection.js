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
        <div style={{ margin: "40px 10px 40px", backgroundColor: `aqua`}}>
            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div key={node.fields.slug} style={{ margin: "20px 20px", backgroundColor: `green`}}>
                <h3
                    style={{
                    marginBottom: rhythm(1 / 4),
                    }}
                >
                    <Link
                    style={{ boxShadow: `none`, color: `red` }}
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
