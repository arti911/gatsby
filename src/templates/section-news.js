import React from "react";
import { graphql, Link } from "gatsby"
import gql from 'graphql-tag'
import { useSubscription  } from "@apollo/react-hooks";
import Layout from "../components/layout"
import { Card, Row, Col } from 'antd';

const GET_UPDATE_ARTICLES = gql`
  subscription {
    categories {
      slug
      articles_categories {
        article {
          id
          title
          teaser
        }
      }
    }
  }
`

export const query =  graphql`
  query ($id: Int!) {
    news {
      categories: categories_by_pk(id: $id) {
        slug
        articles_categories {
          article {
            id
            title
            teaser
          }
        }
      }
    }
  }
`

const SectionNews = (props) => {
  const { Meta } = Card;
  const { news } = props.data
  const { loading, error, data } = useSubscription(GET_UPDATE_ARTICLES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { articles_categories } = data.categories.find(item => item.slug === news.categories.slug)

  return (
    <Layout>
      <Row gutter={[16, 24]}>
        {
          articles_categories.map(el => (
            <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={el.article.id}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Link to={`/${el.article.id}`}>{el.article.title}</Link>
                <Meta description={el.article.teaser} />
              </Card>
            </Col>
          ))
        }
      </Row>
    </Layout>
  )
}

export default SectionNews;
