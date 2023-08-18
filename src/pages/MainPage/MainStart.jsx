import React from 'react'
import images from '../../app/assets/index'

const MainStart = () => {
  return (
    <div className='start'>
      <div className='start__info'>
        <h1 className='start__text'>
          Часовое ателье Дмитрия Котова
        </h1>
        <a
          className='start__link'
          href='https://www.youtube.com/watch?v=xm5kRU06wxw'
          target='_blank'
          rel='noreferrer'
        >
          <img src={images.button__play} alt='play' />
          <p className='start__link__text'>
            Смотреть видео презентацию
          </p>
        </a>
      </div>
      <img
        className='start__image'
        src={images.watch__silver}
        alt='watch__silver' />
    </div>
  )
}

export default MainStart