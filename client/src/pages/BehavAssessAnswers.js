import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
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

    let {id} = useParams();
    console.log(id)

    const [behaveData, setBehaveData] = useState({
        User: {},
        response: {
            ["Adult Men"]: 0,
            ["Adult Women"]: 0,
            Babies: 0,
            Belly: 0,
            Brushing: 0,
            Cars: 0,
            Cats: 0,
            Children: 0,
            Collar: 0,
            Dogs: 0,
            Down: 0,
            ["Drop it"]: 0,
            Fetch: 0,
            Flank: 0,
            ["Go In Crate"]: 0,
            Head: 0,
            Heel: 0,
            Hindquarters: 0,
            ["Knocking at the door"]: 0,
            // ["Leave it"]: 0,
            Legs: 0,
            ["Loud Noises"]: 0,
            Muzzle: 0,
            Neck: 0,
            ["New people"]: 0,
            ["New places"]: 0,
            ["New things"]: 0,
            ["People wearing hats"]: 0,
            ["People wearing hoodies"]: 0,
            ["People wearing sunglasses"]: 0,
            ["People with facial hair"]: 0,
            ["Put leash and collar off and on"]: 0,
            ["Recall (comes when called)"]: 0,
            ["Severe Weather"]: 0,
            Sit: 0,
            ["Small pets"]: 0,
            Stay: 0,
            ["Strange objects, e.g., lawn tractors"]: 0,
            ["Strangers in public"]: 0,
            ["Strangers on property"]: 0,
            Streets: 0,
            ["Toes for clipping nails"]: 0,
            ["Touch your dogs at all"]: 0,
        }
    })

    useEffect(()=>{
        API.getBehaviorAnswers(id).then(res =>{
            console.log(res.data[0])
            setBehaveData(res.data[0])
        }).catch(err=>{
            console.error(err)
        })
    },[])

    return (
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "1em"}}>
                <Typography variant="h4" color="primary">Dog name's Behavior Assessment</Typography>
                <Divider/>
            </Grid>
            <Grid item container>
                <Grid item style={{marginRight: "4em"}}>
                    <Typography style={{fontWeight: "bold"}}>Completed by: <Typography>{behaveData.User.firstName} {behaveData.User.lastName}</Typography></Typography>
                </Grid>
                <Grid item>
                    <Typography style={{fontWeight: "bold"}}>Date: <Typography>{behaveData.date}</Typography></Typography>
                </Grid>
            </Grid>

            <Grid item container className={classes.itemContainer}>
                <Grid item container xs={10} sm={8} md={8} lg={7} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h5">Compliance/Commands</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}