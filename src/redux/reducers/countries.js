import { FETCH_ALL_COUNTRIES } from "../actions/types";

const initialState = [];

export const allCountries = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_COUNTRIES:
            return payload;
        default:
            return state;
    }
}