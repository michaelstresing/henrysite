import React from "react"

import Header from "./header"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props

  return (
    <div style={{ backgroundColor: `rgb(233, 158, 158)`, position: `absolute`, overflow: `hidden` }}>
      <Header/>
        <main>
        { children }
        </main>
        <footer style={{
              position: `fixed`,
              bottom: `2rem`,
              width: `140px`,
              left: `calc(50% - 40px)`
        }}>
          © {new Date().getFullYear()} 
        </footer>
    </div>
    )
  }
}

export default Layout