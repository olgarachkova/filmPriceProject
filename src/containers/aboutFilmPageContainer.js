import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";

import { AboutFilmPage } from 'components/aboutFilmPage'


const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APIfilmDataByID = "/api/v2.1/films/"; //+{id}

export function AboutFilmPageContainer() {
    const [filmInfo, setFilmInfo] = useState({});
    const { filmid } = useParams(); // /film/:filmid

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
                setFilmInfo(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }

        getFilmInfo();
    }, [])

    return (
        <AboutFilmPage filmInfo={filmInfo} />
    )
}