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
        console.log(el)
        createPage({
            path: `/${el.slug}/`,
            component: require.resolve('./src/templates/section-news.js'),
            context: {
                id: el.id
            }
        })
    })
}
