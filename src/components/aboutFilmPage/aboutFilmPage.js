import './aboutFilmPage.scss'

import React from "react";

import { AboutFilmCard } from "components/aboutFilmCard";


export function AboutFilmPage({ filmInfo }) {
    return (
        <div className='content'>
            <div className='container'>
                <AboutFilmCard {...filmInfo} />
            </div>
        </div>

    )
}