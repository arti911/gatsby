import React from 'react'

import ArticleCard from './ArticleCard'

export default {
  component: ArticleCard,
  title: 'ArticleCard',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
}

const articleCardData = {
  id: 1,
  slug: 'article-1',
  title: 'Title article',
  teaser: 'Lorem ipsum'
}

export const DefauldCard = () => <ArticleCard article={ articleCardData } />
