import React from "react"

import Header from "./header"
import LayoutStyles from "./layout.css"

class Layout extends React.Component {
  
  render() {
    const { children } = this.props

  return (
    <>
      <Header/>
        <main>
          <div className={ LayoutStyles.worksContainer }>
            
          </div>
          <div className={ LayoutStyles.writingsContainer }>
            
          </div>
        
        </main>
        <footer className={ LayoutStyles.footer }>
          © {new Date().getFullYear()} - H. Drake
        </footer>
    </>
    )
  }
  
}

export default Layout