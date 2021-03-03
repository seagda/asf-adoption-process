import React, { useState, useEffect } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";

// const useStyles = makeStyles(theme => ({
//     matrix: {
//         root: "table table-striped"
//     },
//     navigationButton: "button btn-lg"
// }))

var myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-lg"
};

export default function AdoptApp(props) {
    // const classes = useStyles();

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        API.getAdopterApp().then(res=>{
            setAppQuestions(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    }, [])

    return (
        <Survey.Survey
            json={{elements: appQuestions}}
            showCompletedPage={false}
            onComplete={data => props.showCompletedPage(data.valuesHash)}
        />
    )
}