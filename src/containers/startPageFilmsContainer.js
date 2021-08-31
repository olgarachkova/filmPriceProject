import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { StartPageFilms } from "components/startPageFilms";
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_TOP20FILMS } from "actions/filmsActions"

import { kinopoiskAPI_URL, APItopFilms, kinopoiskAPI_headers } from "assets/kinopoisk";

export function StartPageFilmsContainer({ history }) {

    const dispatch = useDispatch();

    useEffect(() => {
        async function getTopFilms() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APItopFilms, {
                    headers: kinopoiskAPI_headers
                });
                dispatch({
                    type: GET_TOP20FILMS,
                    payload: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }
        getTopFilms();
    }, []);

    const topFilms = useSelector(state => state.films.topfilms);

    return (
        <Fragment>
            <Header history={history} />
            <StartPageFilms topFilms={topFilms} />
            <Footer />
        </Fragment>
    )
}
