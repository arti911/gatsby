const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemp = path.resolve('src/templates/news.js')
  const articlesSectionTemp = path.resolve('src/templates/section-news.js')

  const { data } = await graphql(`
    {
      news {
        articles {
          id
          teaser
          slug
        }
        categories {
          id
          name_rubric
          title
          slug
        }
      }
    }
  `)

  const article = data.news.articles;
  const categories = data.news.categories;

  article.forEach(el => {
    createPage({
      path: `/${el.slug}/`,
      component: articleTemp,
      context: {
        id: el.id
      }
    })
  });

  categories.forEach(el => {
    createPage({
      path: `/${el.slug}/`,
      component: articlesSectionTemp,
      context: {
        id: el.id
      }
    })
  })
}