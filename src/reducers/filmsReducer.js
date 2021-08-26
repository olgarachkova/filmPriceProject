import { SET_TOP20FILMS, GET_FILM_INFO } from "actions/filmsActions"

const initialState = {
    loading: false,
    topfilms: [],
    film: {}
};

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP20FILMS: {
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
        default:
            return (state);
    }
}

