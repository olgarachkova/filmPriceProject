import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { GET_SEARCH_RESULTS } from "actions/filmsActions"
import { SearchPage } from 'components/searchPage'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APISearchByKeyword = "/api/v2.1/films/search-by-keyword?keyword=";
//https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=avengers&page=1

export function SearchPageContainer({ history }) {
    const [searchQuery, setSearchQuery] = useState(history.location.search.slice(12));
    useState()
    const dispatch = useDispatch();

    useEffect(() => {
        async function getFilmsByKeyword() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APISearchByKeyword + searchQuery, {
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
        console.log(searchQuery);
    }, [searchQuery]);

    const results = useSelector(state => state.films.searchresults);

    return (
        <Fragment>
            <Header history={history} />
            <SearchPage results={results} />
            <Footer />
        </Fragment>

    )
}