import React, { useState } from 'react'
import { Card, Row, Col, Button } from 'antd'
import { Link } from "gatsby"

const ArticlesList = ({ articles }) => {
  const [ countArticles, setCountArticles ] = useState(8)
  const { Meta } = Card;

  const onLoad = () => setCountArticles(countArticles + 4)

  return (
    <>
      <Row gutter={[16, 24]}>
        {articles.slice(0, countArticles).map(article =>
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
            articles.length > countArticles ? <Button onClick={onLoad} type="primary">Загрузить ещё</Button> : null
          }
        </Col>
      </Row>
    </>
  )
}

export default ArticlesList;