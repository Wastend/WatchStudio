import React from 'react'
import images from '../../../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className='footer__info'>
        <a className='logo' href='/' ><img src={images.logo} alt="Logo" /></a>
        <p className='footer__author'>Ⓒ Wastend, 2023</p>
      </div>

      <nav className='footer__nav'>
        <ul>
          <li ><a className='nav__link' href="/articles">Новости</a></li>
          <li ><a className='nav__link' href='/profile'>Профиль</a></li>
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