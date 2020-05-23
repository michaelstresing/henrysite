import { Link } from "gatsby"
import React, { Component } from "react"
import ReactModal from 'react-modal'

import portfolioFile from "../../content/assets/portfolio.pdf"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBioOpen: false,
      isContactOpen: false
    }
  }
  handleBioOpen = event => {
    this.setState({ isBioOpen: true })
  }
  handleContactOpen = event => {
    this.setState({ isContactOpen: true })
  }
  handleBioClose = event => {
    this.setState({ isBioOpen: false })
  }
  handleContactClose = event => {
    this.setState({ isContactOpen: false })
  }

  render() {    
    const headerContainerStyle = {  position: `fixed`,
                                    margin: `1rem`,
                                    width: `12%`,
                                    maxWidth:`10rem`}

    const linkSyle = {  color: `black`,
                        backgroundColor: `#E9E9E9`,
                        fontSize: `1rem`,
                        textAlign:`center`,
                        border: `1px solid black`,
                        margin: `0.2rem`,
                        outline: `none`,
                        cursor: `pointer`,
                        minWidth: `82px`,
                        textDecoration: `none` }

    const modalStyle = { overlay: {
                          backgroundColor: `rgb(0,0,0,0.7)`
                        },
                        content: {
                          backgroundColor: `#E9E9E9`,
                          width: `50%`,
                          left: `20%`,
                          height: `60%`,
                          top: `10%`,
                          borderRadius: `0px`,
                          border: `1px solid black`,
                          padding: `2rem`,
                          display: `flex`,
                          flexDirection: `column`
                        } }
    
    const closeButtonStyle = { color: `red`, 
                               backgroundColor: `transparent`,
                               backgroundRepeat: `no-repeat`,
                               border: `none`,
                               outline: `none`,
                               position: `fixed`, 
                               cursor: `pointer`,
                               fontSize: `36px`,
                               top: `5%`, 
                               left: `75%`, 
                               fontWeight: `bold` }
    
    return (
      <header
        style={ headerContainerStyle }>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem`,
          }}>
            <p
              style={{
                margin: `1.5rem auto`,
                color: `black`,
                textDecoration: `none`,
                fontWeight:`bolder`
              }}>
              Henry Drake
            </p>

          <button onClick={this.handleBioOpen} style={ linkSyle }>
            Bio
          </button>

          <button onClick={this.handleContactOpen} style={ linkSyle }>
            Contact
          </button>

          <a href={portfolioFile}
            download
            style={ linkSyle }> &#x21af; Portfolio</a>{` `}

          <br></br>

          <Link
            to="/#works"
            style={ linkSyle }>Works </Link>
          <Link
            to="/#writing"
            style={ linkSyle }>Writing</Link>
        </div>

        {/* Bio Model */}
        <ReactModal style={ modalStyle }
                    isOpen={this.state.isBioOpen}
                    onRequestClose={this.handleBioClose}
                    contentLabel="Biography of Henry Drake">
          <span style={{ margin: `15px 5px` }}>
            Swiss-British artist based between Geneva and London working across sculpture, installation and text.
          </span>
          <span style={{ margin: `15px 5px` }}>
            Founding member of LIMBO, an off-space in Geneva that aims to question Geneva's nature as an intermediary space, a place where the world reconvenes to discuss global issues without the decisions impacting the soil whereby they are made. The bubble. At LIMBO we are interested in what cultures emerge under the blankets of intermediary space created by global culture. 
          </span>
          <span style={{ margin: `15px 5px` }}>
            A member of COLLECTIVE DISGRACE, group of four young artists based in Geneva interested in the concepts of alteration, the monstrous and the strange. Together, we work and play with questions regarding apocalyptic imaginaries by reappropriating fear as a tool for collective action. We believe fear can be a positive force with the power to relativize our existence in the face of otherness, which we have constructed as a form of “Nature”,  putting humans in contact with their environment.
          </span>
          <button onClick={this.handleBioClose} style={ closeButtonStyle }>X</button>
        </ReactModal>

        {/* Contact Model */}
        <ReactModal style={ modalStyle }
                    isOpen={this.state.isContactOpen}
                    onRequestClose={this.handleContactClose}
                    contentLabel="Contact Details of Henry Drake">
          <p>Maybe links to Insta / Phone / email / whatever... </p>
          <button onClick={this.handleContactClose} style={ closeButtonStyle }>X</button>
        </ReactModal>
      </header>
    )
  }
}

export default Header