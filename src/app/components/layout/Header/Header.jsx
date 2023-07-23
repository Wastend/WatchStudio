import React from 'react'
import Logo from '../../../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <div className="header__links">
        <a href='/' ><img className='header__logo' src={Logo} alt="Logo" /></a>
        <a href="/articles">Новости</a>
      </div>
      
        <a href='/profile'>Профиль</a>
      
    </header>
  )
}

export default Header