import React, { useEffect, Fragment } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import { AboutFilmPage } from 'components/aboutFilmPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_FILM_INFO } from "actions/filmsActions"

import { kinopoiskAPI_URL, APIfilmDataByID, kinopoiskAPI_value } from "assets/kinopoisk";

export function AboutFilmPageContainer({ history }) {
    const { filmid } = useParams(); // /film/:filmid

    const dispatch = useDispatch();

    /**
     * запрос к апи кинопоиска, получение информации о фильме по id
     */
    useEffect(() => {
        async function getFilmInfo() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APIfilmDataByID + filmid, {
                    headers: {
                        'X-API-KEY': kinopoiskAPI_value,
                    }
                });
                dispatch({
                    type: GET_FILM_INFO,
                    payload: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }

        getFilmInfo();
    }, [])
    const filmInfo = useSelector(state => state.films.film);


    return (
        <Fragment>
            <Header history={history} />
            <AboutFilmPage filmInfo={filmInfo} />
            <Footer />
        </Fragment>
    )
}