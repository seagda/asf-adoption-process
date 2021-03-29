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


export default function AppAnswersMe() {
    const classes = useStyles();
    const [adoptSurvey, setAdoptSurvey] = useState( new Survey.Model())

    let {id} = useParams();
    console.log(id)

    const [adoptData, setadoptData] = useState({
        response: {},
        AppStatus: {},
        AppType: {}
    })

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        const appPromise = API.getMyAppResponses(id)
        API.getAdopterApp().then(res=>{
            setAppQuestions(res.data)
            let newSurvey = new Survey.Model({elements: res.data})
            console.log(res.data)
            return appPromise.then(ans =>{
                console.log(ans.data)
                setadoptData(ans.data[0])
                newSurvey.data = ans.data[0].response
                setAdoptSurvey(newSurvey)
            })
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    },[])

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "1em"}}>
                <Typography variant="h4" color="primary">Application Submission </Typography>
                <Divider/>
            </Grid>

            <Grid item container>
                <Grid item style={{marginRight: "4em"}}>
                    <Typography style={{fontWeight: "bold"}}>Status: <Typography>{adoptData.AppStatus?.name}</Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography style={{fontWeight: "bold"}}>App type: <Typography>{adoptData.AppType?.name} </Typography></Typography>
                </Grid>
            </Grid>

            <Grid item container className={classes.itemContainer}>
                <Grid item container xs={10} sm={8} md={8} lg={7} style={{marginTop: "3em"}} direction="column">
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={4} md={4} lg={4}>
                            <Survey.Survey
                            model={adoptSurvey}
                            mode="display"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}