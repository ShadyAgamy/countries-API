import {
    SWITCH_THEME
} from "../actions/types";

const initialState = {
    darkMode: true
};

export const theme_switcher = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
}