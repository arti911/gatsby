const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articlesSectionTemp = path.resolve('src/templates/section-news.js')
    const articleTemp = path.resolve('src/templates/news.js')

    resolve(
      graphql(
        `
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const { data } = result

        data.news.articles.forEach(el => {
          createPage({
            path: `/${el.slug}/`,
            component: articleTemp,
            context: {
              id: el.id
            }
          })
        });

        data.news.categories.forEach(el => {
          createPage({
            path: `/${el.slug}/`,
            component: articlesSectionTemp,
            context: {
              id: el.id
            }
          })
        })
      })
    )
  });
}