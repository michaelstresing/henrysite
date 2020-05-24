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
                        fixed(width: 2400 height: 2400) {
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
      <div id="works">
        <div style={{ width: `82%`, margin: `4% 15%` }}>
        <p style={{ margin: `0px 4%`,
                    color: `black`,
                    textDecoration: `none`,
                    fontWeight: `bold` }}>
          Works
        </p>

        <div style={{ height: `75vh`,
                      display: `flex`,
                      flexDirection: `row`,
                      overflowX: `scroll`,
                      overflowY: `hidden`,
                      minHeight: `606px` }}>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title
            const frontImage = node.frontmatter.displayImg.childImageSharp.fixed
            const date = node.frontmatter.date

            return (
                <div key={node.fields.slug} style={{display: `flex`,
                                                    flexDirection: `column`,
                                                    flexShrink: `0`,
                                                    justifyContent: `flex-start`,
                                                    alignItems: `center`,
                                                    height: `600px`,
                                                    width: `600px`}}>

                        <Link to={`/blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ height: `90%`,  
                                     width: `90%`, 
                                     textDecoration: `none`, 
                                     color: `black`,
                                     lineHeight: `90%`,
                                     padding: `5px`}}>
                        <Img style={{ height: `100%`, width: `100%` }} fixed={ frontImage }></Img>
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
