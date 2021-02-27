import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import EditButton from "./EditButton";
import ApplyButton from "./ApplyButton";
import HoldCheckbox from "./HoldCheckbox";
import UpdateButton from "./UpdateButton";
import ContactButton from "./ContactButton";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function ProfileActions(){
    const classes = useStyles();
    const admin = false;

    return(
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                {admin ? null : <ApplyButton toLink="/application" buttonText="Apply to adopt an aussie"/>}
            </Grid>
            <Grid item>
                {admin ? <EditButton toLink="/editprofile" buttonText="Edit User"/> : <EditButton toLink="/editprofile" buttonText="Edit Profile"/>}
            </Grid>
            <Grid item>
                {admin ? <UpdateButton toLink="/" buttonText="Update User Password"/> : <UpdateButton toLink="/" buttonText="Update Password"/>}
            </Grid>
            <Grid item>
                {admin ? <ContactButton toLink="/" buttonText="Contact User"/> : <ContactButton toLink="/" buttonText="Contact Admin"/>}
            </Grid>
            <Grid item>
                <HoldCheckbox label="Put me on hold"/>
                {admin ? <HoldCheckbox label="Mark User as inactive"/> : null}
            </Grid>
        </Grid>
    )
}