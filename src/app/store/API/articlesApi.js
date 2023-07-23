import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (boild) => ({
    getArticles: boild.query({
      query: () => 'articles'
    })
  })
})

export const { useGetArticlesQuery } = articlesApi