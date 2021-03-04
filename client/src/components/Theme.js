import {createMuiTheme} from "@material-ui/core/styles";

const dkBlue = "#28527A";
const ltBlue = "#8AC4D0";
const dkYellow = "#F4D160";
const ltYellow = "#FBEEAC";

export default createMuiTheme({
    palette: {
        common: {
            main: dkBlue,
            second: dkYellow
        },
        primary: {
            main: dkBlue,
            second: ltBlue
        },
        secondary: {
            main: dkYellow,
            second: ltYellow
        },
        lightBlue: {
            main: ltBlue
        },
        lightYellow: {
            main: ltYellow
        },
        }
    }
)