import React, { useState } from "react"
import LayoutMain from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css'
import ArticlesList from '../components/ArticlesList'
import { graphql } from 'gatsby'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const getArticles = gql`
  {
    articles {
      id
      title
      teaser
      slug
    }
  }
`

export const articles = graphql`
  {
    news {
      articles {
        id
        title
        teaser
        slug
      }
    }
  }
`

const IndexPage = (props) => {
  const { news: { articles } } = props.data
  const [articlesList, setArticles] = useState(articles)
  const { loading, error, data } = useQuery(getArticles)

  if (loading) return <h1>Loading</h1>
  if (error) return `Error: ${error.message}`

  const newArticles = data.articles

  if (articlesList.length !== newArticles.length) {
    setArticles(newArticles)
  }

  return (
    <LayoutMain>
      <SEO title="Home" />
      <ArticlesList articles={articlesList} />
    </LayoutMain>
  )
}

export default IndexPage
