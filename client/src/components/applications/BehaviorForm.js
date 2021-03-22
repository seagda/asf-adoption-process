import React, { useState, useEffect } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";
import "../../components/applications/style.css";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        width: "40%",
        marginBottom: "4em",
        [theme.breakpoints.down("md")]:{
            width: "50%"
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
        })
    }, [])

    return (
        <React.Fragment>
            <Grid container className={classes.mainContainer}>
                <Grid item>
                    <Typography variant="h4" color="primary">Behavior Assessment</Typography>
                    <Divider/>
                </Grid>
                <Grid item container direction="column" style={{marginTop: "1em", marginBottom: "2em"}}>
                    <Grid item>
                        <Typography>All answers are based on a scale of 0-5.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>0- the dog has no experience with the subject</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>1- the dog performs poorly</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>5- the dog performs expertly</Typography>
                    </Grid>
                </Grid>
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