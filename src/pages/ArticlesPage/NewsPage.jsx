import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ArticlePage = (props) => {

  const article = props.article

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(localStorage.getItem('page'));

  return (
    <div className='news'>
      <div className="news__topbar">
        <NavLink to='/articles' className='topbar__link_back'>
          <div className="triangle__back"></div>
          Назад
        </NavLink>
        <div className="news__topbar_right">
          <p>
            {`Новости ${article.date}`}
          </p>
          <p>{`Автор ${article.author}`}</p>
        </div>

      </div>
      <div className="news__info__header">
        <img src={article.image} alt="news" />
        <h1>{article.header}</h1>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: article.html }} className="news__info__description">
      </div>
    </div>
  )
}

export default ArticlePage