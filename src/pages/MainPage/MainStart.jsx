import React from 'react'
import watch__silver from '../../app/assets/watch__silver.png'

const MainStart = () => {
  return (
    <div className='start'>
      <div className="start__info">
        <p className="start__text">Часовое ателье Дмитрия Котова</p>
      </div>
      <img src={watch__silver} className="start__image" alt='watch__silver'></img>
    </div>
  )
}

export default MainStart