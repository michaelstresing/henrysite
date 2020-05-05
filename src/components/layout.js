import React from "react"
import Header from "./header"

import Writing from "./writingSection"
import Works from "./worksSection"

class Layout extends React.Component {
  render() {

  return (
    <div style={{ backgroundColor: `#E9E9E9`, 
                  margin:`0`, 
                  padding:`0 0 5rem 0`,
                  display: `flex`,
                  flexDirection:`column`,
                  justifyContent: `space-between` }}>
      <Header />
      <Works />
      <Writing /> 
      <footer style={{
            position: `fixed`,
            bottom: `2rem`,
            width: `140px`,
            left: `calc(50% - 40px)`}}>
        © {new Date().getFullYear()} 
      </footer>
    </div>
    )
  }
}

export default Layout