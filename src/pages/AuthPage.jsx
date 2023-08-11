import React, { useState } from 'react'
import db from '../app/data/db.json'

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
      <div className={`auth__error${error === true ? ' open' : error === false ? ' close' : ''}`}>
        <p>Имя пользователя или пароль введены неверно</p>
        <button onClick={() => setError(false)}></button>
      </div>
      <div className="auth__block">
        <h3 className='auth__header'>Авторизация</h3>
        <form onSubmit={submit} action="">
          <input placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)} type="text" />
          <input placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} type="password" />
          <button disabled={login === '' || password === '' ? true : false} title={login === '' || password === '' ? 'Введите логин и пароль' : ''} className='button__login' type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage