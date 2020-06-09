import React from "react"
import gql from 'graphql-tag'
import { useQuery  } from "@apollo/react-hooks";
import Layout from "../components/layout"
import { Link } from "gatsby"

const GET_ARTICLE = gql`
  {
    articles {
      title
      body
      slug
    }
  }
`;

const NotFoundPage = (props) => {
  // const { loading, error, data } = useQuery(GET_ARTICLE)
  // const { location: { pathname } } = props

  // if (loading) return 'Loading...'
  // if (error) return `Error: ${error.message}`

  // const slug = pathname.split("").splice(1).join("")
  // const article = data.articles.find(art => art.slug === slug)

  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      <h1>Not Found Page</h1>
      {/* <h1>{article.title}</h1>
      <div>{article.body}</div> */}
    </Layout>
  )
}

export default NotFoundPage
