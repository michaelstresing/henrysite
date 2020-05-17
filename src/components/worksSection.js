import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

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
                }
              }
            }
            amish: file(relativePath: { eq: "amish_parking_lot.png" }) {
              childImageSharp {
                fixed(width: 8000 height: 12000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          
    `)

    return (
      <div id="works" >
      <h3 style={{ margin: `2% 15%` }}>Works</h3>

        <div style={{ margin: `1% 15%`,
                      height: `86vh`,
                      width: `82%`,
                      display: `flex`,
                      overflowX: `scroll`,
                      overflowY: `hidden` }}>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div key={node.fields.slug} style={{display: `flex`,
                                                    flexDirection: `column`,
                                                    alignItems: `center`,
                                                    borderRadius: `16px`,
                                                    whiteSpace: `nowrap` }}>
                    
                    <h3 style={{ marginBottom: rhythm(2),
                                  position: `relative`,
                                  top: `40%` }}>
                        <Link to={`/blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ boxShadow: `none`,
                                     color: `white`,
                                     fontSize: `2rem`,
                                     textDecoration: `none` }}>
                            { title }
                        </Link>
                    </h3>
                    <Img fixed={ data.amish.childImageSharp.fixed }></Img>

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
      </div>

    )
  }
