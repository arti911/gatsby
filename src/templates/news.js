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
  const { news: { articles } } = data

  console.log(1111)
  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      <pre>{JSON.stringify(articles, null, 1)}</pre>
    </Layout>
  )
}

export default News;