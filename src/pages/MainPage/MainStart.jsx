import React from 'react'
import watch__silver from '../../app/assets/watch__silver.png'
import play_button from '../../app/assets/play_button.png'
import fon_start from '../../app/assets/fon_start.png'

const MainStart = () => {
  return (
    <div className='start'>
      <img className='fon__start' src={fon_start} alt="fon" />
      <div className="start__info">
        <p className="start__text">Часовое ателье Дмитрия Котова</p>
        <a href='https://www.youtube.com/watch?v=xm5kRU06wxw' target='_blank' rel="noreferrer" className="link__presentation">
          <img src={play_button} alt='play__button'></img>
          <p >Смотреть видео презентацию</p>
        </a>
      </div>
      <img src={watch__silver} className="start__image" alt='watch__silver'></img>
    </div>
  )
}

export default MainStart