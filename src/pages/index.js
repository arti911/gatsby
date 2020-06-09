import React, { useState, useEffect } from "react"
import LayoutMain from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css'
import ArticlesList from '../components/ArticlesList'
import { useQuery, useLazyQuery  } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { get } from 'lodash'

const GET_ARTICLES = gql`
  query {
    articles(order_by: {updated_at: desc}) {
      id
      title
      teaser
      slug
      updated_at
    }
  }
`;

const GET_MAX_UPDATE = gql`
  {
    articles_aggregate {
      aggregate {
        max {
          updated_at
        }
      }
    }
  }  
`

export const articlesHasura = graphql`
  query {
    news {
      articles(order_by: {updated_at: desc}) {
        id
        title
        teaser
        slug
        updated_at
      }
      articles_aggregate {
        aggregate {
          max {
            updated_at
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const [ articles, setArticles ] = useState(props.data.news.articles)
  const { loading: maxArticleLoading, data: maxArticle } = useQuery(GET_MAX_UPDATE)
  const [ getArticles, { loading, data: updatedArticles }] = useLazyQuery(GET_ARTICLES)

  useEffect(() => {
    if (maxArticle) {
      if (needReload()) {
        getArticles()
      }
    }
  }, [maxArticleLoading])

  useEffect(() => {
    if (updatedArticles) {
      setArticles(updatedArticles.articles)
    }
  }, [loading])

  const needReload = () => +new Date(get(props, 'data.news.articles_aggregate.aggregate.max.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300')) !== +new Date(get(maxArticle, 'articles_aggregate.aggregate.max.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300'))

  
  return (
    <LayoutMain>
      <SEO title="Home" />
      <ArticlesList articles={articles} />
    </LayoutMain>
  )
}

export default IndexPage
