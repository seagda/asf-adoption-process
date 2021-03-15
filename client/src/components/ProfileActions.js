import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import EditButton from "./EditButton";
import ApplyButton from "./ApplyButton";
import HoldCheckbox from "./HoldCheckbox";
import UpdateButton from "./UpdateButton";
import ContactButton from "./ContactButton";
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function ProfileActions(props){
    const classes = useStyles();

    const userString = localStorage.getItem("user")
    if(!userString){
        window.location = "/"
    }
    const user = JSON.parse(userString)

    // const id = 

    return(
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <EditButton toLink={"/editOtherUser/" + props.id} buttonText="Edit Profile"/> 
            </Grid>
            <Grid item>
               <UpdateButton toLink="/" buttonText="Update Password"/>
            </Grid>
            {!user.roles.includes("adopter") ? (
                <Grid item>
                    <ApplyButton toLink="/adopterApplication" buttonText="Apply To Adopt" color="secondary" icon={<PlayArrowIcon />} />
                </Grid>)
            : null}
            {!user.roles.includes("foster") ? (
                <Grid item>
                    <ApplyButton toLink="/fosterApplication" buttonText="Apply To Foster" color="secondary" icon={<PlayArrowIcon />} />
                </Grid>)
            : null}
            {/* <Grid item>
                {admin ? <ContactButton toLink="/" buttonText="Contact"/> : <ContactButton toLink="/" buttonText="Contact Admin"/>}
            </Grid> */}
            {/* <Grid item>
                <HoldCheckbox label="Put me on hold"/>
                {admin ? <HoldCheckbox label="Mark User as inactive"/> : null}
            </Grid> */}
        </Grid>
    )
}