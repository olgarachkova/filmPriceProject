import './aboutFilmCard.scss'

import React from "react";

export function AboutFilmCard(props) {
    return (
        <article className="about-film">
            <img src={props.posterUrlPreview} alt="poster"
                className="about-film-img" />
            <div className="about-film-bigdescrition">
                <span className="film-title">{props.nameRu}</span>
                <p className="about-film-description">{props.description}</p>
                <span className="film-minititle">Год выпуска: {props.year}</span>
            </div>
        </article>
    )
}

