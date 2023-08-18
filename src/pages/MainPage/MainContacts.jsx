import React, { useState } from 'react'
import images from '../../app/assets/index'

const MainContacts = () => {

    const [send, setSend] = useState('')

    const submit = async (event) => {
        event.preventDefault()
        setSend(true)
        setTimeout(() => {
            setSend(false)
        }, 4000);
    }

    return (
        <div className='contacts'>
            <div className={`success${send === true ? ' open' : send === false ? ' close' : ''}`}>
                <p className='success__text'>
                    Заявка успешно отправлена
                </p>
                <button onClick={() => setSend(false)}/>
            </div>

            <div className='contacts__info'>
                <h3 className='contacts__info_header'>
                    Контакты
                </h3>
                <a
                    className='contacts__info_element'
                    href='https://goo.gl/maps/Y42VMTTu4Sm9trkz9'
                >
                    <img src={images.icon__position} alt='position' />
                    Россия, Москва, 1-я Фрезерная ул., д.2/1, корп.9
                </a>
                <div className='contacts__info_block'>
                    <a
                        className='contacts__info_element'
                        href='tel:+79999999999'
                    >
                        <img src={images.icon__phone} alt='position' />
                        {'+7 (999) 999 99 99'}
                    </a>
                    <a
                        className='contacts__info_element'
                        href='mailto:wastend318@gmail.com'
                    >
                        <img src={images.icon__message} alt='position' />
                        wastend318@gmail.com
                    </a>
                </div>

                <div className='contacts__info_block'>
                    <a
                        className='contacts__info_element'
                        href='https://www.instagram.com/wwastend/'
                    >
                        <img src={images.icon__instagram} alt='position' />
                        wwastend
                    </a>
                    <a
                        className='contacts__info_element'
                        href='https://www.facebook.com/elonreevesmusk'
                    >
                        <img src={images.icon__facebook} alt='position' />
                        elonreevesmusk
                    </a>
                </div>

                <button
                    className='button__send'
                    onClick={submit}
                >
                    Оставить заявку на звонок
                </button>
            </div>
        </div>
    )
}

export default MainContacts