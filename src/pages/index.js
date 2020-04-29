import React from "react"

import Layout from "../components/layout"
import Img from "../components/image"
import SEO from "../components/seo"
import Writing from "../components/writingSection"
import henry_mov from "../../content/assets/chatrooming.mp4"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem`, display: `flex`, flexDirection: `row`   }}>
      <Img  />
    </div> 
    <Writing />
  </Layout>
)

export default IndexPage
