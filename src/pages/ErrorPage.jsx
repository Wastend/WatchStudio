import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error__page'>
      <h3>Данной страницы не существует</h3>
      <NavLink className='nav__link' to='/'>Перейти на главную страницу</NavLink>
    </div>
  )
}

export default ErrorPage