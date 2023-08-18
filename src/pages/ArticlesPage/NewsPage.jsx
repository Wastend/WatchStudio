import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './NewsPage.scss'

const ArticlePage = (props) => {

  const article = props.article

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='news'>
      <div className='news__topbar'>
        <NavLink
          className='topbar__link_back'
          to='/articles'
        >
          <div className='triangle__back' />
          Назад
        </NavLink>
        <div className='news__topbar_right'>
          <p className='news__topbar__text'>
            {`Новости ${article.date}`}
          </p>
          <p className='news__topbar__text'>
            {`Автор ${article.author}`}
          </p>
        </div>

      </div>
      <div className='news__info__header'>
        <img src={article.image} alt='news' />
        <h1 className='news__info__name'>
          {article.header}
        </h1>
      </div>
      <hr />
      <div
        className='news__info__description'
        dangerouslySetInnerHTML={{ __html: article.html }} />
    </div>
  )
}

export default ArticlePage