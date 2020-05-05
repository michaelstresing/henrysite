import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Popup from "reactjs-popup"

import ContactContent from "./contactContent"
import AboutContent from "./aboutContent"

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
