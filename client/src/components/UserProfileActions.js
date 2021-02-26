import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import EditButton from "../components/EditButton";
import ApplyButton from "../components/ApplyButton";
import HoldCheckbox from "../components/HoldCheckbox";
import UpdateButton from "../components/UpdateButton";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function UserProfileActions(){
    const classes = useStyles();

    return(
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <ApplyButton toLink="/application" buttonText="Apply to help an aussie"/>
            </Grid>
            <Grid item>
                <EditButton toLink="/editprofile" buttonText="Edit Profile"/>
            </Grid>
            <Grid item>
                <UpdateButton toLink="/" buttonText="Update Password"/>
            </Grid>
            <Grid item>
                <HoldCheckbox label="Put me on hold"/>
            </Grid>
        </Grid>
    )
}