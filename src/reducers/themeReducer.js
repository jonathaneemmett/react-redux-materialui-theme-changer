/**
 * Load Theme Types
 */
import { LOAD_THEME, THEME_ERRORS } from "../actions/types";

/**
 * Import themes
 */
import Themes from '../themes';

/**
 * @desc    Initial State
 */
const initialState = {
    theme: {
        "name":"lightTheme",
        "currentTheme": Themes.lightTheme
    },
    error: null,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case THEME_ERRORS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}