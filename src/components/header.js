import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Popup from "reactjs-popup"

import ContactContent from "./contactContent"
import AboutContent from "./aboutContent"

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
            }
            
      `)

  const Header = ({ siteTitle }) => (
    <header
      style={{
        position: `fixed`,
        border: `1px black solid`,
        margin: `1.2rem`,
        width: `12%`,
      }}>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem`,
        }}>
          <Link
            to="/"
            style={{
              margin: `auto`,
              color: `black`,
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
          <Popup
            trigger={<button className="button"> Bio </button>}
            modal
            closeOnDocumentClick>
            <AboutContent />
          </Popup>
          <Popup
            trigger={<button className="button"> Contact </button>}
            modal
            closeOnDocumentClick>
            <ContactContent />
          </Popup>
          <Link to={`blog/about/"`}
                              state={{ modal: true }}
                              style={{  color: `white`,
                                        fontSize: `2rem`,
                                        textDecoration: `none` }}
                                        >
            Bio
          </Link>
      </div>
    </header>
  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: `Henry Drake`,
  }
}