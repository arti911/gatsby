import React from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Card, Row, Col } from 'antd';

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

const SectionNews = ({ data }) => {
  const { Meta } = Card;
  const articles = data.news.categories.articles_categories;

  return (
    <Layout>
      <Row gutter={[8, 8]}>
        {
          articles.map(el => (
            <Col className="gutter-row" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={el.article.id}>
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
