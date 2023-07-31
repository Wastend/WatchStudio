import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import menu_button from '../../../assets/menu_button.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const click__menu = () => {
    setOpen(!open)
  }

  return (
    <header>
      <a className='logo' href='/' ><img src={logo} alt="Logo" /></a>
      <nav className={`nav ${open && 'open'}`}>
        <ul className="nav__list">
          <li ><a className='nav__link' href="/articles">Новости</a></li>
          <li ><a className='nav__link' href='/profile'>Профиль</a></li>
        </ul>
        <button onClick={click__menu} className="nav__button">
          <img src={menu_button} alt="menu_button" />
        </button>
      </nav>

    </header>
  )
}

export default Header