import React, { Component } from "react"

import { Document, Page } from "react-pdf"
import Test from "../../content/writing/FINAL-Robinsonerie-Amish-Parking-Lots-Have-The-Best-View-of-The-Mountain.pdf"

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
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file={ Test }
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default PdfViewer