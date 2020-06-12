import React, { useState, useEffect } from "react"
import LayoutMain from "../components/layout"
import SEO from "../components/seo"
import "antd/dist/antd.css"
import ArticlesList from "../components/ArticlesList/ArticlesList"
import { useQuery, useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { get } from "lodash"
import { Spin } from "antd"

const GET_ARTICLES = gql`
  query {
    articles(limit: 8, order_by: { updated_at: desc }) {
      id
      title
      teaser
      slug
      updated_at
    }
  }
`

const GET_ARTICLES_COPY = gql`
  query ($limit: Int!) {
    articles(limit: $limit, order_by: { updated_at: desc }) {
      id
      title
      teaser
      slug
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

export const articlesHasura = graphql`
  query {
    news {
      articles(limit: 8, order_by: { updated_at: desc }) {
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

const IndexPage = props => {
  const [ articles, setArticles ] = useState(props.data.news.articles)
  const [ count, setCount ] = useState(4)
  const [ isBtn, setIsBtn ] = useState(true)

  const {
    loading: maxUpdatedLoading,
    error: errorUpdatedData,
    data: maxUpdatedData,
  } = useQuery(GET_MAX_UPDATE, {
    pollInterval: 0,
    fetchPolicy: "network-only",
    onCompleted: event => console.log("onCompleted", event),
  })

  const [
      getArticles,
    {
      loading: updatedArticlesLoading,
      error: errorArticlesData,
      data: updatedArticlesData,
    },
  ] = useLazyQuery(GET_ARTICLES, { fetchPolicy: "network-only" })

  const { data: loadDataMore } = useQuery(GET_ARTICLES_COPY, {
    fetchPolicy: "network-only",
    variables: {
      "limit": 8 + count 
    },
  })

  function needReload() {
    return (
      +new Date(
        get(
          props,
          "data.news.articles_aggregate.aggregate.max.updated_at",
          "Mon Jun 08 2020 23:32:40 GMT+0300"
        )
      ) !==
      +new Date(
        get(
          maxUpdatedData,
          "articles_aggregate.aggregate.max.updated_at",
          "Mon Jun 08 2020 23:32:40 GMT+0300"
        )
      )
    )
  }

  useEffect(() => {
    if (maxUpdatedData) {
      if (needReload()) {
        getArticles()
      }
    }
  }, [maxUpdatedLoading])

  useEffect(() => {
    if (updatedArticlesData) {
      setArticles(updatedArticlesData.articles)
    }
  }, [updatedArticlesLoading])

  const loadArticles = () => {
    if (loadDataMore) {
      setArticles(loadDataMore.articles)
      setCount(count + 4)

      if (loadDataMore.articles.length % 4 !== 0) {
        setIsBtn(false)
      }
    }
  }

  return (
    <LayoutMain>
      <SEO title="Home" />
      {updatedArticlesLoading || maxUpdatedLoading ? (
        <Spin spinning={true} />
      ) : (
        <ArticlesList articles={articles} onLoadArticles={loadArticles} loadMore={isBtn} />
      )}
    </LayoutMain>
  )
}

export default IndexPage
