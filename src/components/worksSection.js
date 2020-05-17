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
                        fixed(width: 800 height: 600) {
                          ...GatsbyImageSharpFixed
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
      <div id="works" >
        <div style={{ width: `82%`, margin: `1% 15%`, padding: `0px 1%`}}>
        <p style={{ margin: `1%`,
                    color: `black`,
                    textDecoration: `none`,
                    fontWeight: `bold` }}>
          Works
        </p>

        <div style={{ height: `86vh`,
                      display: `flex`,
                      overflowX: `scroll`,
                      overflowY: `hidden` }}>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title
            const frontImage = node.frontmatter.displayImg.childImageSharp.fixed
            const date = node.frontmatter.date

            return (
                <div key={node.fields.slug} style={{display: `flex`,
                                                    flexDirection: `column`,
                                                    alignItems: `center`,
                                                    height: `100%`,
                                                    width: `1800px`}}>

                        <Link to={`/blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ height: `90%`,  
                                     width: `90%`, 
                                     textDecoration: `none`, 
                                     color: `black`,
                                     lineHeight: `90%`,
                                     padding: `5px`}}>
                            <Img style={{ height: `100%`, width: `100%`, left: `10%`}} fixed={ frontImage }></Img>
            <p style={{ textAlign:`center`, margin: `10px 0px 0px 0px`}}>{ title } ({ new Date(date).getFullYear() })</p>
                        </Link>
                </div>
                ) 
                }
            )}
        </div>
      </div>
    </div>
    )
  }
