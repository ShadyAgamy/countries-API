import { combineReducers } from "redux";

import messageReducer from "./message";

import { allCountries } from "./countries";

import { theme_switcher } from "./themeSwitcher";

export default combineReducers({
    message: messageReducer,
    allCountries,
    theme_switcher
});