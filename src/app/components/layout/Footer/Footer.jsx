import React from 'react'
import images from '../../../assets/index'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer__info'>
        <NavLink className='logo' to='/' ><img src={images.logo} alt="Logo" /></NavLink>
        <p className='footer__author'>Ⓒ Wastend, 2023</p>
      </div>

      <nav className='footer__nav'>
        <ul>
          <li ><NavLink className='nav__link' to="/articles">Новости</NavLink></li>
          <li ><NavLink className='nav__link' to='/profile'>Профиль</NavLink></li>
        </ul>
        <ul>
          <li className='footer__media'>
            <a href='https://www.instagram.com/wwastend/' className="contacts__info_element">
              <img src={images.icon__instagram} alt="position" />
              wwastend
            </a>
          </li>
          <li className='footer__media'>
            <a href='https://www.facebook.com/elonreevesmusk' className="contacts__info_element">
              <img src={images.icon__facebook} alt="position" />
              elonreevesmusk
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer