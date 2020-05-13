import { Link } from "gatsby"
import React from "react"

import portfolioFile from "../../content/assets/portfolio.pdf"

export default () => {

  const linkSyle = {  color: `black`,
                      fontSize: `1rem`,
                      textAlign:`center`,
                      border: `1px solid black`,
                      margin: `0.2rem`,
                      textDecoration: `none` }

  return (
    <header
      style={{
        position: `fixed`,
        margin: `1rem`,
        width: `12%`,
        maxWidth:`10rem`
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
              margin: `1.5rem auto`,
              color: `black`,
              textDecoration: `none`,
              fontWeight:`bolder`
            }}>
            Henry Drake
          </Link>

        <Link to={`/about`}
          state={{ modal: true }}
          style={ linkSyle }>
          Bio
        </Link>

        <Link
          to="/#works"
          style={linkSyle}>Works </Link>
        <Link
          to="/#writing"
          style={linkSyle}>Writing</Link>
        <a href={portfolioFile}
           download
           style={linkSyle}> &#x21af; Portfolio</a>{` `}
      </div>
    </header>
  )
}