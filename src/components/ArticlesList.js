import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { Card, Row, Col } from 'antd'
import { Link } from "gatsby"

const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      teaser
    }
  }
`;

const ArticlesList = () => {
  const { Meta } = Card;
  const { loading, error, data } = useQuery(GET_ARTICLES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Row>
      {data.articles.map(article =>
        (
          <Col className="gutter-row" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={article.id}>
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