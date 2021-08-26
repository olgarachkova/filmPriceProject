import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GET_SEARCH_RESULTS } from "actions/filmsActions"
import { SearchPage } from 'components/searchPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APISearchByKeyword = "/api/v2.1/films/search-by-keyword?keyword=";
//https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=avengers&page=1

export function SearchPageContainer(props) {
    const { query } = useParams();
    const querytest = 'куб';

    const dispatch = useDispatch();

    useEffect(() => {
        async function getFilmsByKeyword() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APISearchByKeyword + querytest, {
                    headers: {
                        'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
                    }
                });
                dispatch({
                    type: GET_SEARCH_RESULTS,
                    payload: response.data
                });
            } catch (error) {
                console.error(error);
            }
        }

        getFilmsByKeyword();
        console.log(props);
    }, []);

    const results = useSelector(state => state.films.searchresults);

    return (
        <SearchPage results={results} />
    )
}