import axios from 'axios';

const kinopoiskAPI_URL = "https://kinopoiskapiunofficial.tech";
const APItopFilms = "/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

export const GET_TOP20FILMS = 'SET_TOP20FILMS';
export const GET_FILM_INFO = 'GET_FILM_INFO';
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';


/*export async const getTop20Films = () => {
    try {
        const response = await axios.get(kinopoiskAPI_URL + APItopFilms, {
            headers: {
                'X-API-KEY': '8fcf6015-6f7e-408c-9ced-d7c67167b5a2',
            }
        });
        return {
            type: GET_TOP20FILMS,
            payload: response.data
        };
    } catch (error) {
        throw new Error(error);
    }
}*/