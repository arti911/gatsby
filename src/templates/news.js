import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query ($id: Int!) {
    news {
      articles: articles_by_pk(id: $id) {
        title
        body
      } 	
    }
  }
`;

const News = ({ data }) => {
  const qq = data.news.articles;

  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      <pre>{JSON.stringify(qq, null, 1)}</pre>
    </Layout>
  )
}

export default News;