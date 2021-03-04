import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SaveButton from "../components/SaveButton";
import API from "../utils/API";

import DogBlockEdit from "../components/DogBlockEdit";
import DogStatusEdit from "../components/DogStatusEdit";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3em"
        }
    },
    formItem: {
        marginBottom: "1em"
    }
}))

export default function DogProfileEdit(){
    const classes = useStyles();

    let {id} = useParams();
    const [dogData, setDogData] = useState({})
    useEffect(()=>{
        API.getSingleDogData(id).then(res =>{
            console.log(res.data)
            setDogData(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    },[])

    return(
        <Grid container className={classes.mainContainer}>
            <DogBlockEdit dogData={dogData} submitFunction={API.updateDogInfo}/>
            {/* <DogStatusEdit/> */}
        </Grid>
    )
}