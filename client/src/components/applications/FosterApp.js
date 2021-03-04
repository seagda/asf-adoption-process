import React, { useState, useEffect } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { json } from "../questions/questions1";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";
import "../../components/applications/style.css";

// const useStyles = makeStyles(theme => ({
//     matrix: {
//         root: {
//             sv_main: {
//                 sv_body: {
//                     borderTop: "blue"
//                 }
//             }
//         }
//     }
// }))

// var myCss = {
//     matrix: {
//         root: {

//         }
//     },
//     navigationButton: "button"
// };

export default function FosterApp(props) {
    // const classes = useStyles();

    const [appQuestions, setAppQuestions] = useState([])

    useEffect(()=>{
        API.getFosterApp().then(res=>{
            setAppQuestions(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    }, [])

    return (
        <Survey.Survey
            className="sv_main sv_body"
            json={{elements: appQuestions}}
            showCompletedPage={false}
            onComplete={data => props.showCompletedPage(data.valuesHash)}
        />
    )
}