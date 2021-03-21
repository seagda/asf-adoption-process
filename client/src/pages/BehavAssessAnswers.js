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
                        <Typography variant="h4">Breed Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            
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