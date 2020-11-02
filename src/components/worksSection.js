import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
                    displayImg {
                      childImageSharp {
                        fluid(maxWidth: 990, quality: 90) {
                          aspectRatio
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    `)

    return (
      <div id="works">
        <div style={{ width: `82%`, margin: `4% 15%` }}>
        <p style={{ margin: `auto`,
                    color: `black`,
                    textDecoration: `none`,
                    fontWeight: `bold` }}>Works</p>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title
            const frontImage = node.frontmatter.displayImg.childImageSharp.fluid
            const date = node.frontmatter.date

            return (
                <div key={node.fields.slug}>
                        <Link to={`/blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ textDecoration: `none`,
                                     color: `black`,
                                     padding: `5px`}}>
                          <Img className={ frontImage.aspectRatio } 
                               fluid={ frontImage }></Img>
                          <p style={{ textAlign:`center`, margin: `16px 0px 0px 0px`}}>{ title } ({ new Date(date).getFullYear() })</p>
                        </Link>
                </div>
                ) 
                }
            )}
        </div>
      </div>
    )
  }
