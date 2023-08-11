import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './app/components/layout/MainLayout'
import pages from './pages/index'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useGetArticlesQuery } from './app/store'

function App() {

  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(() => {
    const response = localStorage.getItem('user')
    response === null ? setIsAuth(false) : setIsAuth(true)
  }, [dispatch])

  const { data = [] } = useGetArticlesQuery()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<pages.MainPage />} />
          <Route path='/articles' element={<pages.ArticlesPage />} />
          {isAuth ? <Route path='/profile' element={<pages.ProfilePage />} />
            : ["/login", "/profile"].map((path, index) =>
              <Route path={path} element={<pages.AuthPage />} key={index} />
            )
          }
          {data.map(article => (
            <Route path={`/articles/${article.id}`} element={<pages.NewsPage article={article} />} key={article.id} />
          ))}
        </Route>
        <Route path='*' element={<pages.ErrorPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
