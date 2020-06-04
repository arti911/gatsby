import React from 'react'
import { Card, Row, Col } from 'antd'
import { Link, graphql } from "gatsby"
import { Pagination } from 'antd';
import Layout from "../components/layout"

export const GET_ARTICLES = graphql`
  query articlesList($limit: Int!) {
    news {
      articles (
        limit: $limit
      ) {
        id
        title
        teaser
      }
    }
  }
`;

const ArticleList = ({ data, pageContext }) => {
  const { Meta } = Card;

  console.log(pageContext.currentPage)
  return (
    <Layout>
      <Row gutter={[16, 24]}>
        {data.news.articles.map(article =>
          (
            <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={article.id}>
              <Card
                  hoverable
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Link to={`/${article.id}`}>{article.title}</Link>
                <Meta description={article.teaser} />
              </Card>
            </Col>
          )
        )}
      </Row>
      <Pagination defaultCurrent={1} total={50} />
    </Layout>
  )
}

export default ArticleList;