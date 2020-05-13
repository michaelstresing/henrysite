import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Works from "../components/worksSection"
import Writing from "../components/writingSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Works id="works" />
    <Writing />
  </Layout>
)

export default IndexPage
