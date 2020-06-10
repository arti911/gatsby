import React, { useState, useEffect } from "react";
import { graphql } from "gatsby"
import gql from 'graphql-tag'
import { useQuery, useLazyQuery  } from "@apollo/react-hooks";
import Layout from "../components/layout"
import { get } from 'lodash'
import ArticlesList from "../components/ArticlesList"
import { Spin } from "antd"

const GET_UPDATE_ARTICLES = gql`
  query ($id: Int!) {
    categories_by_pk(id: $id) {
      articles_categories(order_by: {updated_at: desc}) {
        article {
          id
          title
          teaser
          slug
        }
      }
    }
  }
`

const GET_MAX_UPDATE = gql`
  query ($id: Int!) {
    categories_by_pk(id: $id) {
      articles_categories_aggregate {
        aggregate {
          max {
            updated_at
          }
        }
      }
    }
  }
`

export const query =  graphql`
  query ($id: Int!) {
    news {
      categories: categories_by_pk(id: $id) {
        id
        articles_categories(order_by: {updated_at: desc}) {
          updated_at
          article {
            id
            title
            teaser
            slug
          }
        }
        articles_categories_aggregate {
          aggregate {
            max {
              updated_at
            }
          }
        }
      }
    }
  }
`

const SectionNews = ({ data }) => {
  const [ articlesCategories, setArticlesCategories ] = useState(data.news.categories.articles_categories)
  const { loading: maxArticlesLoading, data: maxArticlesCategory } = useQuery(GET_MAX_UPDATE, {
    pollInterval: 0,
    fetchPolicy: "network-only",
    onCompleted: event => console.log("onCompleted", event),
    variables: {
      "id": data.news.categories.id
    }
  })
  const [ getArticlesCategory, { loading, data: updatedArticlesCategory }] = useLazyQuery(GET_UPDATE_ARTICLES, {
    fetchPolicy: "network-only",
    variables: {
      "id": data.news.categories.id
    }
  })

  useEffect(() => {
    if (maxArticlesCategory) {
      if (needReload()) {
        getArticlesCategory()
      }
    }
  }, [maxArticlesLoading])
  
  useEffect(() => {
    if (updatedArticlesCategory) {
      setArticlesCategories(updatedArticlesCategory.categories_by_pk.articles_categories)
    }
  }, [loading])

  const needReload = () => {
    return (
      +new Date(
        get(
          data,
          'news.categories.articles_categories_aggregate.aggregate.max.updated_at',
          'Mon Jun 08 2020 23:32:40 GMT+0300'
        )
      ) !==
      +new Date(
        get(
          maxArticlesCategory,
          'categories_by_pk.articles_categories_aggregate.aggregate.max.updated_at',
          'Mon Jun 08 2020 23:32:40 GMT+0300'
        )
      )
    )
  }

  return (
    <Layout>
      {updatedArticlesCategory || maxArticlesLoading ? (
        <Spin spinning={true} />
      ) : (
        <ArticlesList articles={articlesCategories} />
      )}
    </Layout>
  )
}

export default SectionNews;
