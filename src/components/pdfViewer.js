import React, { Component } from "react"

import { Document, Page } from "react-pdf"
import Test from "../../content/pdfs/amish-parking-lots.pdf"

class PdfViewer extends Component {

  state = { numPages: null, pageNumber: 1 }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () =>
  this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  
  goToNextPage = () =>
  this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{ height: `100%`,
                    width: `100%`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`}}>
        <div style={{ width: 600 }}>
          <Document
            file={ Test }
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>
        <nav style={{ display: `flex`,
                      flexDirection: `row`,
                      justifyContent: `space-between`}}>
          <button style={{ margin:`2rem` }} onClick={pageNumber > 1? this.goToPrevPage: null}>Prev</button>
          <p>
          {pageNumber} of {numPages}
        </p>
          <button style={{ margin:`2rem` }} onClick={pageNumber < numPages? this.goToNextPage: null}>Next</button>
        </nav>
        {/* <p>
          {pageNumber} of {numPages}
        </p> */}
      </div>
    );
  }
}

export default PdfViewer