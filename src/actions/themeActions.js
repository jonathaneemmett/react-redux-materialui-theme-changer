/**
 * Import Types
 */
import {LOAD_THEME, THEME_ERRORS} from "./types";

/**
 * Import Themes
 */
import Themes from "../themes";

/**
 * Load Theme
 */
export const loadTheme = (name) => (dispatch, getState) => {
    try{
        let newTheme;
        let newName;

        if(name === "lightTheme"){
            newName = 'darkTheme';
            newTheme = Themes.darkTheme;
        } else if(name === 'darkTheme'){
            newName = 'lightTheme';
            newTheme = Themes.lightTheme;
        }

        // build payload
        let res = {
            "name": newName,
            "currentTheme": newTheme
        }

        dispatch({
            type: LOAD_THEME,
            payload: res
        });

    } catch(err) {
        dispatch({
            type: THEME_ERRORS
        });
    }
}