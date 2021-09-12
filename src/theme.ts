import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import { createTheme } from "@material-ui/core/styles";


const _createTheme =
    process.env.NODE_ENV === "production"
        ? createTheme
        : unstable_createMuiStrictModeTheme;

const theme = _createTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
});
export default theme;
