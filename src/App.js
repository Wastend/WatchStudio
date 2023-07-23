import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './app/components/layout/MainLayout'
import pages from './pages/index'

function App() {
  const isAuth = false
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<pages.MainPage />} />
          <Route path='/articles' element={<pages.ArticlesPage />} />
          {isAuth && <Route path='/profile' element={<pages.ProfilePage />} />}
        </Route>
        {!isAuth && ["/login", "/profile"].map((path, index) =>
          <Route path={path} element={<pages.AuthPage />} key={index} />
        )}
        <Route path='*' element={<pages.ErrorPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
