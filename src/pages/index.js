import React from "react"
import LayoutMain from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css'
import ArticlesList from '../components/ArticlesList'

const IndexPage = () => {
  return (
    <LayoutMain>
      <SEO title="Home" />
      <ArticlesList />
    </LayoutMain>
  )
}

export default IndexPage
