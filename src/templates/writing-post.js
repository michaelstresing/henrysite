import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

class WritingPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx

    return (
      <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => 
          <div >     
            { modal ? (
              <div style={{ margin: `24px`}}>
                <Link to={closeTo}
                      style={{ position: `fixed`,
                              top: `8%`,
                              left: `80%`,
                              color: `red`,
                              fontSize: `36px`,
                              height:`40px`,
                              width: `40px` }}>
                  X
                </Link>
                <div>
                  <h1 style={{ alignSelf: `center`}}>{post.frontmatter.title}</h1>
                  <p>
                    {post.frontmatterdate}
                  </p>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </div>
              </div>
            ) : (
              <div>
                <h1>{post.frontmatter.title}</h1>
                <p>
                  {post.frontmatterdate}
                </p>
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
            )}
          </div>
        }
      </ModalRoutingContext.Consumer>
    )
  }
}

export default WritingPostTemplate

export const pageQuery = graphql`
    query WritingPostBySlug($slug: String!) {
        site {
        siteMetadata {
            title
            author
          }
        }
        mdx(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            type
            displayImg {
              childImageSharp {
                fixed(width: 1200 height: 1200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }
      }
    }
    `