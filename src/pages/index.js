import React from "react"

import Layout from "../components/layout"
import Img from "../components/image"
import SEO from "../components/seo"
import Writing from "../components/writingCard"
import henry_mov from "../../content/assets/chatrooming.mp4"

console.log(henry_mov)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem`, display: `flex`, flexDirection: `row`   }}>
      <Img  />
    <video> <source src={{henry_mov}} type="video/mp4"/></video> 
    </div> 
    <Writing />
  </Layout>
)

export default IndexPage
