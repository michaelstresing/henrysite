import React from "react"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    // enables smooth scrolling on page
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    
  return (
    <div style={{ backgroundColor: `#E9E9E9`, 
                  margin:`0`, 
                  padding:`0 0 5rem 0`,
                  display: `flex`,
                  flexDirection:`column`,
                  justifyContent: `space-between` }}>
      <Header />
      { children }
      <footer style={{
            position: `fixed`,
            bottom: `2rem`,
            width: `140px`,
            left: `calc(50% - 40px)` }}>
        © {new Date().getFullYear()} 
      </footer>
    </div>
    )
  }
}

export default Layout