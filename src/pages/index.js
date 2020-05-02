import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Writing from "../components/writingSection"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <Writing />
    <Writing />
  </Layout>
)

export default IndexPage
