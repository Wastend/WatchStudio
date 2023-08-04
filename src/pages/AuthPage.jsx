import React, { useState } from 'react'

const AuthPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    if (login.toLowerCase() === 'user' && password === '12345') {
      localStorage.setItem('isAuth', true)
    }
    else {
      setError('Имя пользователя или пароль введены неверно')
      alert('Имя пользователя или пароль введены неверно')
    }
  }

  console.log(error);

  return (
    <div className='auth'>
      <div className="auth__block">
        <h3 className='auth__header'>Авторизация</h3>
        <form onSubmit={submit} action="">
          <input value={login} onChange={e => setLogin(e.target.value)} type="text" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          <button type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage