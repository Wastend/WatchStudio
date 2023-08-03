import React from 'react'
import images from '../../app/assets/index'

const MainContacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts__info">
                <p className="contacts__info_header"></p>
                <a href='https://goo.gl/maps/Y42VMTTu4Sm9trkz9' className="contacts__info_element">
                    <img src={images.icon__position} alt="position" />
                    Россия, Москва, 1-я Фрезерная ул., д.2/1, корп.9
                </a>
                <div className="contacts__info_block">
                    <a href='tel:+79999999999' className="contacts__info_element">
                    <img src={images.icon__phone} alt="position" />
                    {'+7 (999) 999 99 99'}
                    </a>
                    <a href='mailto:wastend318@gmail.com' className="contacts__info_element">
                    <img src={images.icon__message} alt="position" />
                    wastend318@gmail.com
                    </a>
                </div>

                <div className="contacts__info_block">
                    <a href='https://www.instagram.com/wwastend/' className="contacts__info_element">
                    <img src={images.icon__instagram} alt="position" />
                    wwastend
                    </a>
                    <a href='https://www.facebook.com/elonreevesmusk' className="contacts__info_element">
                    <img src={images.icon__facebook} alt="position" />
                    elonreevesmusk
                    </a>
                </div>

                <button className="button__send">Оставить заявку на звонок</button>

            </div>
        </div>
    )
}

export default MainContacts