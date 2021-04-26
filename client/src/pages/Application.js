import React, { useState, useEffect, useCallback } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%"
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            spacing: theme.spacing(2),
            marginLeft: 0
        }
    }
}))

export default function Application() {
    const classes = useStyles();
    const [showPage, setShowPage] = useState(true);
    const [appType, setAppType] = useState({});

    const { appTypeName } = useParams();

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(() => {
        API.getAppQuestions(appTypeName).then(res => {
            setAppQuestions(res.data.panels)
            setAppType(res.data.AppType)
        }).catch(err => {
            console.error(err.response.data.message)
            alert("get data failed")
        })
    }, [])

    const onCompletePage = useCallback((data) => {
        API.sendAppData(data, appType.id);
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return (
            <Grid item container direction="column" align="center">
                <Typography variant="h5">Thanks for completing the application!</Typography>
                <Typography variant="h5">An ASF team member will contact you soon.</Typography>
            </Grid>
        )
    }

    return (
        <Grid container className={classes.mainContainer}>
            <Typography variant="h4" color="primary">{appTypeName[0].toUpperCase() + appTypeName.substring(1)} Application</Typography>
            {showPage ? <Survey.Survey
                className="sv_main sv_body"
                json={{ elements: appQuestions }}
                showCompletedPage={false}
                onComplete={data => onCompletePage(data.valuesHash)}
            /> : setFinalPage()}
        </Grid>
    )
}