import { GET_TOP20FILMS, GET_FILM_INFO, GET_SEARCH_RESULTS } from "actions/filmsActions"

const initialState = {
    loading: false,
    topfilms: [],
    film: {},
    searchresults: []
};

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP20FILMS: {
            return {
                ...state,
                topfilms: action.payload.films
            };
        }
        case GET_FILM_INFO: {
            return {
                ...state,
                film: action.payload.data
            };
        }
        case GET_SEARCH_RESULTS: {
            return {
                ...state,
                searchresults: action.payload.films
            };
        }
        default:
            return (state);
    }
}

