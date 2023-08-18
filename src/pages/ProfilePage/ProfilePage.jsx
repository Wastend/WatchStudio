import React, { useEffect } from 'react'
import db from '../../app/data/db.json'
import './ProfilePage.scss'

const ProfilePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = db.users

  const userId = localStorage.getItem('user')

  const exit = () => {
    localStorage.removeItem('user')
    window.location.href = 'login'
  }

  const user = data.filter(el => el.id === Number(userId))[0]

  return (
    user &&
    <div className='profile'>
      <h1 className='profile__nickname'>
        {user.login}
      </h1>
      <h4 className='profile__name'>
        {user.name}
      </h4>
      <div className='profile__info'>
        <div className='profile__info__block'>
          <p className='profile__info__header'>
            Номер телефона:
          </p>
          <p>
            {user.phone}
          </p>
        </div>
        <div className='profile__info__block'>
          <p className='profile__info__header'>
            Статус пользователя:
          </p>
          <p>
            {user.status}
          </p>
        </div>
        <div className='profile__info__block'>
          <p className='profile__info__header'>
            Максимальная скидка:
          </p>
          <p>
            {user.discount}
          </p>
        </div>
      </div>
      <button
        className='button__send'
        onClick={exit}
      >
        Выйти из аккаунта
      </button>
    </div>

  )
}

export default ProfilePage