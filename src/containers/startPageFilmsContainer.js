import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { StartPageFilms } from "components/startPageFilms";

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APItopFilms = "/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

export function StartPageFilmsContainer() {
    const [topFilms, setTopFilms] = useState([]);

    /**
     * запрос к апи кинопоиска, получение топ-20
     */
    useEffect(() => {
        async function getTopFilms() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APItopFilms, {
                    headers: {
                        'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
                    }
                });
                setTopFilms(response.data.films);
            } catch (error) {
                console.error(error);
            }
        }

        getTopFilms();
    }, [])

    return (
        <StartPageFilms topFilms={topFilms} />
    )
}
