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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
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
