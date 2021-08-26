import './moviePreviewCard.scss'

import React from "react";

export function MoviePreviewCard(props) {
    return (
        <article className='one-film-here'>
            <img src={props.img} alt="poster" className='img-film' />
            <div className='film-description'>
                <span className='film-title'>{props.title}</span>
            </div>
        </article>
    )
}
