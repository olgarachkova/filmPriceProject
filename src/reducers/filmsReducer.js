import { handleActions } from "redux-actions";

import { loadTop20 } from "actions/filmsActions";

const initialState = {
    loading: false,
    films: []
};

export const filmsReducer = handleActions({
    [loadTop20]: (state, action) => {

    }
}, initialState);