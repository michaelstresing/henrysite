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
                        fixed(width: 309 height: 309) {
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
      <div id="writing">
        <div style={{ width: `82%`, margin: `4% 15%`, padding: `0px 1%`}}>
        <p style={{ margin: `1%`,
                    color: `black`,
                    textDecoration: `none`,
                    fontWeight: `bold`}}>
          Writing + Editions
        </p>

        <div style={{ display: `flex`,
                      flexDirection: `row`,
                      overflowX: `scroll`,
                      overflowY: `hidden`}}>

            {data.allMdx.edges.map(({ node }) => {
            const title = node.frontmatter.title
            const frontImage = node.frontmatter.displayImg.childImageSharp.fixed
            return (
                <div key={node.fields.slug} style={{ display: `flex`,
                                                     flexDirection: `column`,
                                                     flexShrink:`0`,
                                                     justifyContent: `flex-start`,
                                                     alignItems: `center`,
                                                     height: `400px`,
                                                     width: `300px`}}>

                        <Link to={`/blog${node.fields.slug}`}
                            state={{ modal: true }}
                            style={{ height: `90%`,  
                                     width: `90%`, 
                                     textDecoration: `none`, 
                                     color: `black`,
                                     lineHeight: `90%`,
                                     padding: `5px`}}>
                            <p style={{ textAlign:`center`, margin: `10px 0px 0px 0px`}}>{ title }</p>
                            <p style={{ textAlign:`center`, margin: `10px 0px 0px 0px`, fontSize: `12px`}}>{node.frontmatter.date}</p>
                            <Img style={{ height: `80%`, width: `80%`, left: `10%`}} fixed={ frontImage }></Img>
                            <p style={{ textAlign:`center`, margin: `10px 0px 0px 0px`}} dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt }}/>
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