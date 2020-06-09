import React, { useState } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import gql from 'graphql-tag'
import { useQuery  } from "@apollo/react-hooks";

const page = gql`
  {
    articles {
      title
      body
      slug
    }
  }
`

export const GET_ARTICLE = graphql`
  {
    news {
      articles {
        title
        body
        slug
      }
    }
  }
`;

const NotFoundPage = (props) => {
  const [ slug, setSlug ] = useState(props.location.pathname.split("").splice(1).join(""))

  const { loading, data } = useQuery(page)
  
  if (loading) return 'Loading..'
  console.log('gql', data.articles)

  return (
    <Layout>
      <Link to="/">&larr; Назад</Link>
      {/* <h1>Not Found Page</h1> */}
      {
        data.articles.map(item => {
          if (item.slug === slug) {
            return (
              <pre>{JSON.stringify(item, null, 1)}</pre>
            )
          }  
        })
      }
    </Layout>
  )
}

export default NotFoundPage
