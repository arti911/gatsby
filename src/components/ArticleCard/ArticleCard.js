import React from 'react'
import { Link } from "gatsby"
import { Card, Col } from 'antd'

const ArticleCard = ({ article }) => {
  const { Meta } = Card;

  return (
    <Col className="gutter-row" xs={24} md={12} lg={8} xl={6} key={article.id || article.article.id}>
      <Card
          hoverable
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        {/* /${article.slug} */}
        <Link to={`/#`}>{article.title || article.article.title}</Link>
        <Meta description={article.teaser || article.article.teaser} />
      </Card>
    </Col>
  )
}

export default ArticleCard;
