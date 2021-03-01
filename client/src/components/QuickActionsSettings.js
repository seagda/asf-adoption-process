import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import SettingsButton from "./SettingsButton";

const useStyles = makeStyles(theme => ({
    itemContainer: {
        marginTop: "3em",
        justify: "center",
        flexGrow: '1', 
        padding: theme.spacing(1),
        flexWrap: "wrap",
        direction: "row" 
    }
}))

export default function QuickActionsSettings(){
    const classes = useStyles();

    return (
        <Grid container className={classes.itemContainer}>
            <Grid item xs={6} s={4}>
                <SettingsButton toLink="/" buttonText="Edit Profile" variant="outlined" />
            </Grid>
            <Grid item xs={6} s={4}>
                <SettingsButton toLink="/" buttonText="Security"/>
            </Grid>
            <Grid item xs={6} s={4}>
                <SettingsButton toLink="/" buttonText="Personalization"/>
            </Grid>
            <Grid item xs={6} s={4}>
                <SettingsButton toLink="/" buttonText="People and Sharing"/>
            </Grid>
            <Grid item xs={6} s={4}>
                <SettingsButton toLink="/" buttonText="Manage Alerts"/>
            </Grid>
        </Grid>
    )
}