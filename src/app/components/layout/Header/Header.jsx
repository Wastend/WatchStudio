import React from 'react'
import Logo from '../../../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <a href='/' ><img className='header__logo' src={Logo} alt="Logo" /></a>
      <div className="header__links">
        <a href="/articles">Новости</a>
        <a href='/profile'>Профиль</a>
      </div>
    </header>
  )
}

export default Header