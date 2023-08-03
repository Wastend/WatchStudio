import React, { useState } from 'react'
import images from '../../../assets/index'

const Header = () => {
  const [open, setOpen] = useState(false)

  const click__menu = () => {
    setOpen(!open)
  }

  return (
    <header>
      <a className='logo' href='/' ><img src={images.logo} alt="Logo" /></a>
      <nav className={`nav ${open && 'open'}`}>
        <ul className="nav__list">
          <li ><a className='nav__link' href="/articles">Новости</a></li>
          <li ><a className='nav__link' href='/profile'>Профиль</a></li>
        </ul>
        <button onClick={click__menu} className="nav__button">
          <img src={images.button__menu} alt="menu" />
        </button>
      </nav>

    </header>
  )
}

export default Header