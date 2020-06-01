import React from "react"
import { graphql, Link } from "gatsby"
import { Card, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

import LayoutMain from "../components/layout"
import SEO from "../components/seo"

// export const query = graphql`
//   {
//     news {
//       articles {
//         id
//         title
//         teaser
//       }
//     }
//   }
// `;

const GET_ARTICLES = gql`
  query {
    news {
      articles {
        id
        title
        teaser
      }
    }
  }
`;

const IndexPage = () => {
  const { Meta } = Card;

  const { loading, error, data } = useQuery(GET_ARTICLES)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <LayoutMain>
      <SEO title="Home" />
      <Row>
        {data.news.articles.map(news => 
          (
            <Col className="gutter-row" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={news.id}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Link to={`/${news.id}`}>{news.title}</Link>
                <Meta description={news.teaser} />
              </Card>
            </Col>
          )
        )}
      </Row>
    </LayoutMain>
  )
}

export default IndexPage
