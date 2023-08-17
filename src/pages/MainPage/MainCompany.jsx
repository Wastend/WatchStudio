import React from 'react'
import watch__elite_1 from '../../app/assets/watch__elite_1.png'
import watch__elite_2 from '../../app/assets/watch__elite_2.png'

const MainCompany = () => {
    return (
        <div className='company'>
            <div className="company__images">
                <img className='company__watch_1' src={watch__elite_1} alt="watch__elite_1" />
                <img className='company__watch_2' src={watch__elite_2} alt="watch__elite_2" />
                <figure className="company__square"></figure>
            </div>
            <div className="company__info">
                <h1 className="company__header"> Подробнее о Компании </h1>
                <p className='company__description'>
                    Часовое ателье Дмитрия Котова работает в Москве с 2011 года. Мы производим стальные часы под маркой D.Kotov. Производственная база расположена на территории технопарка «Иткол» по ул.1-я Фрезерная. Цех обрудован современным металлообрабатывающим оборудованием с числовым программным управлением, позволяющим производить фрезеровку, точение, электроэрозионную и лазерную обработку, электролитно-плазменную полировку нержавеющей стали и другие технологические операции. В наших часах используются калибры российского и японского производства.
                </p>
            </div>
        </div>
    )
}

export default MainCompany