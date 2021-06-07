/**
 * Light Theme
 */
import {createMuiTheme} from "@material-ui/core";
import {green, tanGreen, darkGreen} from "./colors";

export const lightTheme = createMuiTheme({
    palette:{
        background:{
            default: tanGreen
        },
        primary: {
            main: darkGreen
        },
        secondary: {
            main: green
        }
    }
});