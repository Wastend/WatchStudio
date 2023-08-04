import React, { useState } from 'react'

const AuthPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    if (login.toLowerCase() === 'user' && password === '12345') {
      localStorage.setItem('isAuth', login)
      window.location.href = 'profile'
    }
    else {
      alert('Имя пользователя или пароль введены неверно')
    }
  }

  return (
    <div className='auth'>
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