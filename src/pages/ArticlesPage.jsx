import React from 'react'
import { useGetArticlesQuery } from '../app/store'

const ArticlesPage = () => {
  const {data = [], isLoading} = useGetArticlesQuery()

  if(isLoading) return <h1>loading</h1>

  return (
    <div>
      <ul>
        {data.map(item=>(
          <li key={item.id}>
            {item.header}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesPage