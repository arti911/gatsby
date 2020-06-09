import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import gql from 'graphql-tag'
import { useQuery, useLazyQuery  } from "@apollo/react-hooks";
import Layout from "../components/layout"
import { get } from 'lodash'

const GET_UPDATE_ARTICLE = gql`
  query ($id: Int!) {
    articles_by_pk(id: $id) {
      title
      body
      updated_at
    }
  }
`

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
export const query = graphql`
  query ($id: Int!) {
    news {
      articles: articles_by_pk(id: $id) {
        id
        title
        body
        updated_at
      } 	
    }
  }
`;

const News = ({ data }) => {
  const [ article, setArticle ] = useState(data.news.articles)
  const { loading: maxArticleLoading, data: maxArticle } = useQuery(GET_MAX_UPDATE)
  const [ getArticle, { loading, data: updatedArticle }] = useLazyQuery(GET_UPDATE_ARTICLE, {
    variables: {
      "id": data.news.articles.id
    }
  })

  useEffect(() => {
    if (maxArticle) {
      if (needReload()) {
        getArticle()
      }
    }
  }, [maxArticleLoading])
  
  useEffect(() => {
    if (updatedArticle) {
      setArticle(updatedArticle)
    }
  }, [loading])

  const needReload = () => +new Date(get(data, 'news.articles.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300')) !== +new Date(get(maxArticle, 'articles_aggregate.aggregate.max.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300'))

  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      <pre>{JSON.stringify(article, null, 1)}</pre>
    </Layout>
  )
}

export default News;