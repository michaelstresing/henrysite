import React from "react"

import Header from "./header"
import LayoutStyles from "./layout.css"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props

  return (
    <div className={ LayoutStyles.page }>
      <Header/>
        <main>
        { children }
        </main>
        <footer className={ LayoutStyles.footer }>
          © {new Date().getFullYear()} - H. Drake
        </footer>
    </div>
    )
  }
}

export default Layout