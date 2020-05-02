import React from "react"
import Writing from "./writingSection"
import Header from "./header"

class Layout extends React.Component {
  
  render() {

  return (
    <div style={{ backgroundColor: `rgb(233, 158, 158)`, 
                  margin:`0`, 
                  padding:`0 0 5rem 0`,
                  height:`100vh`,
                  overflow:`hidden`,
                  display: `flex`,
                  flexDirection:`column`,
                  justifyContent: `space-between` }}>
      <Header/>
      <Writing />
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