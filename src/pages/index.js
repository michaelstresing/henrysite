import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Writing from "../components/writingCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Writing />
  </Layout>
)

export default IndexPage


