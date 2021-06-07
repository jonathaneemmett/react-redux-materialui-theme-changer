import {combineReducers} from "redux";

/**
 * Import Reducer Files
 */
import themeReducer from "./themeReducer";

/**
 * Combine Reducers
 */
export default combineReducers({
    theme: themeReducer
});