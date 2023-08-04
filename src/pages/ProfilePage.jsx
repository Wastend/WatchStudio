import React from 'react'

const ProfilePage = () => {
  const exit = () => {
    localStorage.removeItem('isAuth')
  }
  return (
    <button onClick={exit}>
      Выход
    </button>
  )
}

export default ProfilePage