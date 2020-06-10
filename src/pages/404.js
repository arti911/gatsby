import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import gql from 'graphql-tag'
import { useQuery  } from "@apollo/react-hooks";

const pageArticle = gql`
  query addArticle($slug: String!) {
    articles (where: {slug: {_eq: $slug}}) {
      title
      body
      slug
    }
  }
`

const NotFoundPage = (props) => {
  const slug = props.location.pathname.split("/")

  const { loading, data } = useQuery(pageArticle, {
    variables: {
      "slug": slug[slug.length - 1]
    }
  })
  
  if (loading) return 'Loading..'

  return (
    <Layout>
      {
        (data.articles.length) ? (
          data.articles.map(item => (
            <React.Fragment key={item.slug}>
              <Link to="/">&larr; Назад</Link>
              <pre>{JSON.stringify(item, null, 1)}</pre>
            </React.Fragment>
          ))
        ) : (
            <h1>Not Found Page</h1>
          )
      }
    </Layout>
  )
}

export default NotFoundPage
