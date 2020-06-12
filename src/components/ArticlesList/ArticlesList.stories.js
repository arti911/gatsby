import React from 'react'
import { action } from '@storybook/addon-actions'

import ArticlesList from './ArticlesList'

export default {
  component: ArticlesList,
  title: 'ArticlesList',
  xcludeStories: /.*Data$/,
}

const articlesData = [
  {
    "id": 325,
    "title": "feature/interactive-map",
    "teaser": "feature/interactive-map",
    "slug": "feature/interactive-map",
    "updated_at": "2020-06-09T12:18:06.195219+00:00"
  },
  {
    "id": 5,
    "title": "Нападающий «Ювентуса» Криштиану Роналду поговорил о секретах своего успеха.",
    "teaser": "Наша жизнь основана на балансе. Вы можете есть пищу, которую хотите, но взамен вы должны продолжать заниматься спортом.",
    "slug": "secret-ronaldo-success",
    "updated_at": "2020-05-04T11:41:07.933886+00:00"
  },
  {
    "id": 2,
    "title": "Расшифрован геном нового вируса",
    "teaser": "Британские учёные наконец-то расшифровали",
    "slug": "rashifrovan-genom-novogo-virusa",
    "updated_at": "2020-05-04T11:42:03.140895+00:00"
  },
  {
    "id": 326,
    "title": "Новая статья",
    "teaser": "Новая статья",
    "slug": "new-article",
    "updated_at": "2020-06-09T12:39:22.519553+00:00"
  }
]

export const Default = () => <ArticlesList articles={articlesData}  />

export const LoadMore = () => <ArticlesList articles={articlesData} loadMore onLoadArticles={action('onLoadArticles')} />