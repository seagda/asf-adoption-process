import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "./ApplyButton";
import PetsIcon from '@material-ui/icons/Pets';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))

export default function QuickActionsAdmin(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "2em"}}>
            <Grid item>
                <ApplyButton toLink="/Dog-Dossiers" buttonText="Approve Pending Intake" color="primary" icon={<PetsIcon />}/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/View-ASF-Users" buttonText="Approve Foster or Adopter" color="primary" icon={<ThumbUpIcon />}/>
            </Grid>
        </Grid>
    )
}