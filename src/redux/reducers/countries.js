import {
    FETCH_ALL_COUNTRIES,
    FETCH_COUNTRY
} from "../actions/types";

const initialState = {
    all: [],
    country: {}
};

export const allCountries = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case FETCH_ALL_COUNTRIES:
            return {...initialState, all: payload };
        case FETCH_COUNTRY:
            return {...initialState, country: payload };
        default:
            return state;
    }
}