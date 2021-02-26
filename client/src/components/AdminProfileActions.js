import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import EditButton from "../components/EditButton";
import ApplyButton from "../components/ApplyButton";
import HoldCheckbox from "../components/HoldCheckbox";
import UpdateButton from "../components/UpdateButton";
import SingleSelect from "../components/SingleSelect";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function AdminProfileActions(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
                <Grid item>
                    <ApplyButton toLink="/application" buttonText="Apply to help an aussie"/>
                </Grid>
                <Grid item>
                    <EditButton toLink="/editprofile" buttonText="Edit Profile"/>
                </Grid>
                <Grid item>
                    <UpdateButton toLink="/" buttonText="Reset User Password"/>
                </Grid>
                <Grid item>
                    <HoldCheckbox label="Put me on hold"/>
                    <HoldCheckbox label="Mark User as inactive"/>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly" style={{marginTop: "1em"}}>
                <SingleSelect/>
            </Grid>
        </React.Fragment>
    )
}