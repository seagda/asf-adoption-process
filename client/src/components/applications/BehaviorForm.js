import React, { useState, useEffect } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";
import "../../components/applications/style.css";
import Typography from "@material-ui/core/Typography";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        // marginLeft: theme.spacing(35),
        // marginTop: theme.spacing(13),
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


export default function BehaviorForm(props) {
    const classes = useStyles();

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        API.getBehaviorQuestions().then(res=>{
            setAppQuestions(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("get data failed")
        })
    }, [])

    return (
        <React.Fragment>
            <Grid container className={classes.mainContainer}>
                <Typography variant="h4" color="primary">Behavior Assessment</Typography>
                <Survey.Survey
                className="sv_main sv_body"
                json={{elements: appQuestions}}
                showCompletedPage={false}
                onComplete={data => props.showCompletedPage(data.valuesHash)}
                />
            </Grid>
        </React.Fragment>
    )
}