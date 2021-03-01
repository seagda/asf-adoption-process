import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))

export default function AdoptApp(props) {
    const classes = useStyles();

    return (

        <Survey.Survey
            json={json}
            showCompletedPage={false}
            onComplete={data => props.showCompletedPage(data.valuesHash)}
        />

    )
}