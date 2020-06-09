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
  const slug = props.location.pathname.split("").splice(1).join("")

  const { loading, data } = useQuery(pageArticle, {
    variables: {
      "slug": slug
    }
  })
  
  if (loading) return 'Loading..'
  console.log('gql', data)

  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      {/* <h1>Not Found Page</h1> */}
      {
        data.articles.map(item => (
            <pre key={item.slug}>{JSON.stringify(item, null, 1)}</pre>
          )
        )
      }
    </Layout>
  )
}

export default NotFoundPage
