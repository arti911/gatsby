exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      news {
        articles {
          id
          teaser
        }
        categories {
          id,
          name_rubric,
          title,
          slug,
        }
      }
    }
  `)

  const news = result.data.news.articles;
  const categories = result.data.news.categories;

  news.forEach(el => {
    createPage({
      path: `/${el.id}/`,
      component: require.resolve('./src/templates/news.js'),
      context: {
        id: el.id
      }
    })
  });

  categories.forEach(el => {
    createPage({
      path: `/${el.slug}/`,
      component: require.resolve('./src/templates/section-news.js'),
      context: {
        id: el.id
      }
    })
  })

  const articlesPerPage = 2
  const numOfPages = Math.ceil( news.length / articlesPerPage )

  Array.from({ length: numOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if (isFirstPage) return

    createPage({
      path: `/page/${currentPage}`,
      component: require.resolve('./src/templates/article-list.js'),
      context: {
        limit: articlesPerPage,
        currentPage
      }
    })
  })
}
