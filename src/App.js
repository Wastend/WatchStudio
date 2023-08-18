import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './app/components/layout/MainLayout'
import pages from './pages/index'
import { useEffect, useState } from 'react'
import db from './app/data/db.json'

function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const response = localStorage.getItem('user')
    response === null ? setIsAuth(false) : setIsAuth(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  const data = db.articles

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />} >
          <Route
            path='/'
            element={<pages.MainPage />} />
          <Route
            path='/articles'
            element={<pages.ArticlesPage />} />
          {isAuth ?
            <Route
              path='/profile'
              element={<pages.ProfilePage />} />
            :
            ['/login', '/profile'].map((path, index) =>
              <Route
                path={path}
                element={<pages.AuthPage />}
                key={index} />
            )
          }
          {data.map(article => (
            <Route
              path={`/articles/${article.id}`}
              element={<pages.NewsPage article={article} />}
              key={article.id} />
          ))}
        </Route>
        <Route
          path='*'
          element={<pages.ErrorPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App