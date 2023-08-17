import React from 'react'
import images from '../../app/assets/index'

const MainStart = () => {
  return (
      <div className='start'>
        <div className="start__info">
          <h1 className='start__text'>Часовое ателье Дмитрия Котова</h1>
          <a href='https://www.youtube.com/watch?v=xm5kRU06wxw' target='_blank' rel="noreferrer" className="start__link">
            <img src={images.button__play} alt='play'></img>
            <p className='start__link__text'>Смотреть видео презентацию</p>
          </a>
        </div>
        <img src={images.watch__silver} className="start__image" alt='watch__silver'></img>
      </div>
  )
}

export default MainStart