import React, { useState, useEffect } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";
import "../../components/applications/style.css";


export default function BehaviorForm(props) {
    // const classes = useStyles();

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        API.getBehaviorQuestions().then(res=>{
            setAppQuestions(res.data.map((question)=>({type: "rating", name: question.desc, title: question.desc, rateMin: 0, rateMax: 5})))
            console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    }, [])

    return (
        <Survey.Survey
            className="sv_main sv_body"
            json={{questions: appQuestions}}
            showCompletedPage={false}
            onComplete={data => props.showCompletedPage(data.valuesHash)}
        />
    )
}