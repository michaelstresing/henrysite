import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Works from "../components/worksSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Works id="works" />
  </Layout>
)

export default IndexPage
