import api from "../../apis";

import {
    SET_MESSAGE,
    FETCH_ALL_COUNTRIES,
    FETCH_COUNTRY
} from "./types";


export const getAllCountries = () => (dispatch) => {
    return api.get("/all")
        .then(
            (response) => {
                dispatch({
                    type: FETCH_ALL_COUNTRIES,
                    payload: response.data,
                });
                return Promise.resolve();
            },
            (error) => {
                console.log(error);
                const message =
                    (error.response && error.response.data && error.response.data.errors) ||
                    error.message ||
                    error.toString();
                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });
                return Promise.reject();
            }
        );
};

export const getCountry = countryCode => async dispatch => {
    try {
        const response = await api.get(`/alpha/${countryCode}`)
        dispatch({
            type: FETCH_COUNTRY,
            payload: response.data[0],
        });
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.errors) ||
            error.message ||
            error.toString();
        dispatch({
            type: SET_MESSAGE,
            payload: message,
        });
        return Promise.reject();
    }
};