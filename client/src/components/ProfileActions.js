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
                {window.location.href.includes("My-Profile") ? <EditButton toLink={"/editprofile"} buttonText="Edit Profile"/> : <EditButton toLink={"/editOtherUser/" + props.id} buttonText="Edit Profile"/>}
            </Grid>
            <Grid item>
               <UpdateButton toLink="/" buttonText="Update Password"/>
            </Grid>
            {window.location.href.includes("userView") ? 
                    <React.Fragment>
                        <Grid item>
                            <ApplyButton toLink="/appAnswersAdopt" buttonText="View Adopter Application" color="secondary" icon={<PlayArrowIcon />} />
                        </Grid>
                        <Grid item>
                            <ApplyButton toLink="/appAnswersFoster" buttonText="View Foster Application" color="secondary" icon={<PlayArrowIcon />} />
                        </Grid>
                    </React.Fragment>
            : 
                <React.Fragment>
                    {props.roles.includes("Super Admin" && "Regional" && "Admin") ? 
                        null
                    : 
                        <React.Fragment>
                            <Grid item>
                                <ApplyButton toLink="/adopterApplication" buttonText="Apply To Adopt" color="secondary" icon={<PlayArrowIcon />} />
                            </Grid>
                            <Grid item>
                                <ApplyButton toLink="/fosterApplication" buttonText="Apply To Foster" color="secondary" icon={<PlayArrowIcon />} />
                            </Grid>
                        </React.Fragment>
                    }
                </React.Fragment>
            }

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