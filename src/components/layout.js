import React from "react"
import { graphql } from "gatsby"

import Header from "./header"
import LayoutStyles from "./layout.module.css"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props

  return (
    <>
      <Header/>
      <div
        style={{
          height: `100vh`,
          width: `100vw`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{ children }</main>
        <footer classNam={ LayoutStyles.footer }>
          © {new Date().getFullYear()} - H. Drake
        </footer>
      </div>
    </>
    )
  }
  
}

export default Layout