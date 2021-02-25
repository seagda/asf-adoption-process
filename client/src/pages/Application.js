import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import {json} from "../components/surveys/questions";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 0
        }
    }
}))

export default function Application (){
    const classes = useStyles();
    
    return(
        <Grid container className={classes.mainContainer}>
            <Survey.Survey
            json={json}
            />
        </Grid>
    )
}