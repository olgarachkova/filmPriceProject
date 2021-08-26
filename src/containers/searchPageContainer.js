import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

import { SearchPage } from 'components/searchPage'
import { useHistory } from 'react-router-dom';

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APISearchByKeyword = "/api/v2.1/films/search-by-keyword?keyword=";
//https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=avengers&page=1

export function SearchPageContainer(props) {
    const { query } = useParams();
    const querytest = 'куб';
    const [results, setResults] = useState([]);
    let history = useHistory();

    useEffect(() => {
        async function getFilmsByKeyword() {
            try {
                const response = await axios.get(kinopoiskAPI_URL + APISearchByKeyword + querytest, {
                    headers: {
                        'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
                    }
                });
                setResults(response.data.films);
                debugger;
                console.log(results);
            } catch (error) {
                console.error(error);
            }
        }

        getFilmsByKeyword();
        console.log(props);
    }, []);

    return (
        <SearchPage results={results} />
    )
}