import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby"
import gql from 'graphql-tag'
import { useQuery, useLazyQuery  } from "@apollo/react-hooks";
import Layout from "../components/layout"
import { Card, Row, Col, Button } from 'antd';
import { get } from 'lodash'

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
    variables: {
      "id": data.news.categories.id
    }
  })
  const [ getArticlesCategory, { loading, data: updatedArticlesCategory }] = useLazyQuery(GET_UPDATE_ARTICLES, {
    variables: {
      "id": data.news.categories.id
    }
  })
  const { Meta } = Card;

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

  const needReload = () => +new Date(get(data, 'news.categories.articles_categories_aggregate.aggregate.max.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300')) !== +new Date(get(maxArticlesCategory, 'categories_by_pk.articles_categories_aggregate.aggregate.max.updated_at', 'Mon Jun 08 2020 23:32:40 GMT+0300'))

  return (
    <Layout>
      <Row gutter={[16, 24]}>
        {
          articlesCategories.map(el => (
            <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={el.article.id}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Link to={`/${el.article.slug}`}>{el.article.title}</Link>
                <Meta description={el.article.teaser} />
              </Card>
            </Col>
          ))
        }
      </Row>
      {/* <Row>
        <Col className="gutter-row" xs={24} style={{ textAlign: 'center' }}>
          {
            articles_categories.length > countArticles ? <Button onClick={onLoad} type="primary">Загрузить ещё</Button> : null
          }
        </Col>
      </Row> */}
    </Layout>
  )
}

export default SectionNews;
