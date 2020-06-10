const fetch = require('isomorphic-fetch');
const { createHttpLink } = require('apollo-link-http')

module.exports = {
  pathPrefix: "/gatsby",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `hasura`,
        fieldName: `news`,
        createLink: () => {
          return createHttpLink({
            uri: "https://gql-2.test.serafim.help/v1/graphql",
            headers: {
              'x-hasura-admin-secret': '123-123-123-123-123',
            },
            fetch,
          })
        },
      },
    },
   {
    resolve: 'gatsby-plugin-apollo',
    options: {
      uri: 'https://gql-2.test.serafim.help/v1/graphql'
    }
  }
  ],
}
