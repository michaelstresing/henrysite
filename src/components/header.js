import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Popup from "reactjs-popup"

import ContactContent from "./contactContent"

const Header = ({ siteTitle }) => (
  <header
    style={{
      border: `1px black solid`,
      margin: `1.2rem`,
      width: `20%`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}
    >
        <Link
          to="/"
          style={{
            margin: `auto`,
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <br></br>
        <Popup
          trigger={<button className="button"> Bio </button>}
          modal
          closeOnDocumentClick
        >
          <span> Bio </span>
        </Popup>
        <Popup
          trigger={<button className="button"> Contact </button>}
          modal
          closeOnDocumentClick
        >
          <ContactContent />
        </Popup>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Henry Drake`,
}

export default Header
