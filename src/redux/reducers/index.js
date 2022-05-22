import { combineReducers } from "redux";

import messageReducer from "./message";

import { allCountries } from "./countries"

export default combineReducers({
    message: messageReducer,
    allCountries: allCountries
});