import './startPageFilms.scss'

import React from 'react';
import { Link } from 'react-router-dom';

import { MoviePreviewCard } from "components/moviePreviewCard";

export function StartPageFilms({ topFilms }) {
    return (
        <main className='content'>
            <div className='container'>
                <div className='films-here'>
                    {topFilms.map((film, idx) => <Link to={'/film/' + film.filmId} key={idx}>
                        <MoviePreviewCard
                            id={film.filmId}
                            title={film.nameRu}
                            img={film.posterUrlPreview} />
                    </Link>)}
                </div>
            </div>
        </main>
    )
}