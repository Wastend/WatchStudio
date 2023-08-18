import React, { useState } from 'react'
import db from '../../app/data/db.json'
import './AuthPage.scss'

const AuthPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const data = db.users
  const [error, setError] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    const user = data.filter(el => el.login.toLowerCase() === login.toLowerCase() && el.password === password)
    if (user.length) {
      localStorage.setItem('user', user[0].id)
      window.location.href = 'profile'
    }
    else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000);
    }
  }

  return (
    <div className='auth'>
      <div className={`error${error === true ? ' open' : error === false ? ' close' : ''}`}>
        <p className='error__text'>
          Имя пользователя или пароль введены неверно
        </p>
        <button onClick={() => setError(false)}/>
      </div>
      <div className='auth__block'>
        <h3 className='auth__header'>
          Авторизация
        </h3>
        <form onSubmit={submit} action=''>
          <input
            autoComplete='off'
            placeholder='Логин'
            value={login}
            onChange={e => setLogin(e.target.value)}
            type='text' />
          <input
            autoComplete='off'
            placeholder='Пароль'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password' />
          <button
            className='button__login'
            disabled={login === '' || password === '' ? true : false}
            title={login === '' || password === '' ? 'Введите логин и пароль' : ''}
            type='submit'
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage