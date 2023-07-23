import { configureStore } from '@reduxjs/toolkit'
import { articlesApi } from './API/articlesApi'

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware)
})