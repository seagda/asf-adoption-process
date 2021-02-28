import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SaveButton from "../components/SaveButton";

import DogBlockEdit from "../components/DogBlockEdit";
import DogStatusEdit from "../components/DogStatusEdit";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    },
    formItem: {
        marginBottom: "1em"
    }
}))

export default function DogProfileEdit(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <DogBlockEdit/>
            {/* <DogStatusEdit/> */}
        </Grid>
    )
}