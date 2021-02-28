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

export default function QuickActionsFoster(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "1em"}}>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Add Behavior Assessment"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Edit My Profile and Capacity"/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="ASF Team Directory"/>
            </Grid>
        </Grid>
    )
}