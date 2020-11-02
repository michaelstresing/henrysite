import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Writings from "../components/writingSection"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing"/>
    <Writings id="writings" />
  </Layout>
)

export default WritingPage
