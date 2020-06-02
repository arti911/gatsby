import React from 'react'
import { useSubscription  } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { Card, Row, Col } from 'antd'
import { Link } from "gatsby"

const GET_ARTICLES = gql`
  subscription {
    articles {
      id
      title
      teaser
    }
  }
`;

const ArticlesList = () => {
  const { Meta } = Card;
  const { loading, error, data } = useSubscription(GET_ARTICLES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Row gutter={[16, 24]}>
      {data.articles.map(article =>
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
  )
}

export default ArticlesList;
export { GET_ARTICLES };