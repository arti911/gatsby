import React from 'react'
import { Row, Col, Button } from 'antd'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticlesList = ({ articles=[], onLoadArticles, loadMore }) => {
  if (loadMore) {
    return (
      <>
        <Row gutter={[16, 24]}>
          {articles.map(article => <ArticleCard article={article} />)}
        </Row>
        <Row>
          <Col className="gutter-row" xs={24} style={{ textAlign: 'center' }}>
            <Button onClick={onLoadArticles} type="primary">Загрузить ещё</Button>
          </Col>
        </Row>
      </>
    )
  }

  return (
    <Row gutter={[16, 24]}>
      {articles.map(article => <ArticleCard article={article} />)}
    </Row>
  )
}

export default ArticlesList;