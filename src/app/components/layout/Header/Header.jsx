import React, { useState } from 'react'
import images from '../../../assets/index'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const isAuth = localStorage.getItem('isAuth')

  return (
    <header>
      <a className='logo' href='/' ><img src={images.logo} alt="Logo" /></a>
      <nav className={`nav ${openMenu && 'open'}`}>
        <ul className="nav__list">
          <li ><a className='nav__link' href="/articles">Новости</a></li>
          <li ><a className='nav__link' href={`${isAuth === null ? '/login' : '/profile'}`}>Профиль</a></li>
        </ul>
        <button onClick={() => setOpenMenu(!openMenu)} className="nav__button">
          <img src={images.button__menu} alt="menu" />
        </button>
      </nav>

    </header>
  )
}

export default Header