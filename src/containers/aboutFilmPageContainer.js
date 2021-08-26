import React, { useEffect, Fragment } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import { AboutFilmPage } from 'components/aboutFilmPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_FILM_INFO } from "actions/filmsActions"


const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APIfilmDataByID = "/api/v2.1/films/"; //+{id}

export function AboutFilmPageContainer() {
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
                        'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
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
            <Header />
            <AboutFilmPage filmInfo={filmInfo} />
            <Footer />
        </Fragment>
    )
}