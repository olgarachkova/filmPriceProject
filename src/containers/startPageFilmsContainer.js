import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { StartPageFilms } from "components/startPageFilms";
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { GET_TOP20FILMS } from "actions/filmsActions"

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APItopFilms = "/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

export function StartPageFilmsContainer({ history }) {

    const dispatch = useDispatch();

    useEffect(() => {
        async function getTopFilms() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APItopFilms, {
                    headers: {
                        'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
                    }
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
