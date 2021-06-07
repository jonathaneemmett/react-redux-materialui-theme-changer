/**
 * Dark Theme
 */
import {createMuiTheme} from "@material-ui/core";
import {green, tanGreen, darkGreen} from "./colors";

export const darkTheme = createMuiTheme({
    palette:{
        background:{
            default: darkGreen
        },
        primary: {
            main: green
        },
        secondary: {
            main: tanGreen
        }
    }
});