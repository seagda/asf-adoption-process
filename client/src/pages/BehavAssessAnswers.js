import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import API from '../utils/API';


const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        marginBottom: "4em",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 0,
            paddingRight: 8,
            paddingLeft: 8
        }
    },
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}))


export default function BehaveAssessAnswers() {
    const classes = useStyles();
    const [survey, setSurvey] = useState( new Survey.Model())

    let {id} = useParams();
    console.log(id)

    const [behaveData, setBehaveData] = useState({
        Dog: {},
        response: {}
    })

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        const assessPromise = API.getSingleAssessment(id)
        API.getBehaviorQuestions().then(res=>{
            setAppQuestions(res.data)
            let newSurvey = new Survey.Model({elements: res.data})
            console.log(res.data)
            return assessPromise.then(ans =>{
                console.log(ans.data)
                setBehaveData(ans.data)
                newSurvey.data = ans.data.response
                setSurvey(newSurvey)
            })
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    },[])

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "1em"}}>
                <Typography variant="h4" color="primary">Behavior Assessment for {behaveData.Dog.name}</Typography>
                <Divider/>
            </Grid>
            <Grid item container>
                {/* coming back to add name of user who completed assessment */}
                {/* <Grid item style={{marginRight: "4em"}}>
                    <Typography style={{fontWeight: "bold"}}>Completed by: <Typography></Typography></Typography>
                </Grid> */}
                <Grid item>
                    <Typography style={{fontWeight: "bold"}}>Completed on: <Typography>{behaveData.date}</Typography></Typography>
                    <Divider/>
                </Grid>
                
            </Grid>
            
            <Grid item container direction="column" style={{marginTop: "2em"}}>
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

            <Grid item container className={classes.itemContainer}>
                <Grid item container xs={10} sm={8} md={8} lg={6} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={4} md={4} lg={4}>
                            <Survey.Survey
                            model={survey}
                            mode="display"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}