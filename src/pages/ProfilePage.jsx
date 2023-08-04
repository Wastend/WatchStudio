import React from 'react'

const ProfilePage = () => {
  const exit = () => {
    localStorage.removeItem('isAuth')
    window.location.href = 'login'
  }
  return (
    <button onClick={exit}>
      Выход
    </button>
  )
}

export default ProfilePage