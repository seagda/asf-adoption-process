import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "./ApplyButton";

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
                <ApplyButton toLink="/Dog-Dossiers" buttonText="Approve Pending Intake"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/Manage-ASF-Users" buttonText="Approve a Foster"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/Manage-ASF-Users" buttonText="Approve an Adopter"/>
            </Grid>
        </Grid>
    )
}