import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import { Link } from "gatsby"

const ArticlesList = ({ articles=[], onLoadArticles }) => {
  const { Meta } = Card;

  return (
    <>
      <Row gutter={[16, 24]}>
        {articles.map(article =>
          (
            <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={article.id || article.article.id}>
              <Card
                  hoverable
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Link to={`/${article.slug || article.article.slug}`}>{article.title || article.article.title}</Link>
                <Meta description={article.teaser || article.article.teaser} />
              </Card>
            </Col>
          )
        )}
      </Row>
      <Row>
        <Col className="gutter-row" xs={24} style={{ textAlign: 'center' }}>
          {
            <Button onClick={onLoadArticles} type="primary">Загрузить ещё</Button>
          }
        </Col>
      </Row>
    </>
  )
}

export default ArticlesList;