import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "../components/ApplyButton";

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

export default function QuickActions(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Approve Pending Intake"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Approve a Foster"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Approve an Adopter"/>
            </Grid>
        </Grid>
    )
}