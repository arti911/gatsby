import React, { useState } from 'react'
import { useSubscription  } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { Card, Row, Col, Button } from 'antd'
import { Link } from "gatsby"

const GET_ARTICLES = gql`
  subscription {
    articles {
      id
      title
      teaser
      slug
    }
  }
`;

const ArticlesList = () => {
  const [ countArticles, setCountArticles ] = useState(8)
  const { Meta } = Card;
  const { loading, error, data } = useSubscription(GET_ARTICLES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const onLoad = () => setCountArticles(countArticles + 4)

  return (
    <>
      <Row gutter={[16, 24]}>
        {data.articles.slice(0, countArticles).map(article =>
          (
            <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={article.id}>
              <Card
                  hoverable
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Link to={`/${article.slug}`}>{article.title}</Link>
                <Meta description={article.teaser} />
              </Card>
            </Col>
          )
        )}
      </Row>
      <Row>
        <Col className="gutter-row" xs={24} style={{ textAlign: 'center' }}>
          {
            data.articles.length > countArticles ? <Button onClick={onLoad} type="primary">Загрузить ещё</Button> : null
          }
        </Col>
      </Row>
    </>
  )
}

export default ArticlesList;
export { GET_ARTICLES };