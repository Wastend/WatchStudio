import React, { useState } from 'react'
import images from '../../../assets/index'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const isAuth = localStorage.getItem('isAuth')

  return (
    <header>
      <NavLink className='logo' to='/' ><img src={images.logo} alt="Logo" /></NavLink>
      <nav className={`nav${openMenu ? ' open' : ''}`}>
        <ul className="nav__list">
          {openMenu && <li ><NavLink className='nav__link menu__link' to="/" onClick={() => setOpenMenu(false)}>Главная</NavLink></li>}
          <li ><NavLink className={`nav__link${openMenu ? ' menu__link' : ''}`} to="/articles" onClick={() => setOpenMenu(false)}>Новости</NavLink></li>
          <li ><NavLink className={`nav__link${openMenu ? ' menu__link' : ''}`} to={`${isAuth === null ? '/login' : '/profile'}`} onClick={() => setOpenMenu(false)}>Профиль</NavLink></li>
        </ul>
        <button onClick={() => setOpenMenu(!openMenu)} className="nav__button">
          <img src={images.button__menu} alt="menu" />
        </button>
      </nav>

    </header>
  )
}

export default Header