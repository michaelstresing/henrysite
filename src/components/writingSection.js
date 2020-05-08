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
            allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "writing"}}}) {
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
                    displayImg {
                      childImageSharp {
                        fixed(width: 1200 height: 1200) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                  html
                }
              }
            }
            amish: file(relativePath: { eq: "amish_parking_lot.png" }) {
              childImageSharp {
                fixed(width: 1200 height: 1200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          
    `)

    return (
      <div>
      <h3 style={{ margin: `1% 15%` }}>Writing + Editions</h3>

        <div style={{ margin: `1% 15%`,
                      height: `50vh`,
                      width: `82%`,
                      display: `flex`,
                      overflowX: `scroll`,
                      overflowY: `hidden` }}>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const frontImage = node.frontmatter.displayImg.childImageSharp.fixed
            return (
                <div key={node.fields.slug} style={{display: `flex`,
                                                    flexDirection: `column`,
                                                    alignItems: `center`,
                                                    height: `100%`,
                                                    width: `20rem`}}>
                    <h3 style={{ margin: `-5% 0%`, 
                                 position: `relative`, 
                                 top: `
                                 40%` }}>
                        <Link to={`blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{  color: `white`,
                                      fontSize: `2rem`,
                                      textDecoration: `none` }}
                                      >
                            { title }
                        </Link>
                    </h3>
                    <Img style={{ height: `100%`, width: `100%`}} fixed={ frontImage }></Img>
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
