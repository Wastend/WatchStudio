import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticlesCard = (props) => {
    return (
        <div className='article__card'>
            <img src={props.image} alt="article" />
            <p className="article__card__date">{props.date}</p>
            <p className="article__card__header">{props.header}</p>
            <p className="article__card__description">{props.description}</p>
            <NavLink to={`/articles/${props.id}`}>Читать полностью</NavLink>
        </div>
    )
}

export default ArticlesCard