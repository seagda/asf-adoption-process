import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import EditButton from "./EditButton";
import ApplyButton from "./ApplyButton";
import HoldCheckbox from "./HoldCheckbox";
import UpdateButton from "./UpdateButton";
import ContactButton from "./ContactButton";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ViewAppAnswersBtn from "./ViewAppAnswersBtn";

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

    return(
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <EditButton toLink={`/user/${props.id}/edit`} buttonText="Edit Profile"/>
            </Grid>
            <Grid item>
               <UpdateButton toLink="/" buttonText="Update Password"/>
            </Grid>

            {/* Roles conditional not working properly. Commented out and switched to reference user/me in href. But needs to be adjusted for admin, regional etc. view */}
            {props.id == "me" ? 
                    <React.Fragment>
                        <Grid item>
                            <ApplyButton toLink="/adopterApplication" buttonText="Apply To Adopt" color="secondary" icon={<PlayArrowIcon />} />
                        </Grid>
                        <Grid item>
                            <ApplyButton toLink="/fosterApplication" buttonText="Apply To Foster" color="secondary" icon={<PlayArrowIcon />} />
                        </Grid>
                    </React.Fragment>
                    // <React.Fragment>
                    //     <Grid item>
                    //         <ApplyButton toLink="/appAnswersAdopt" buttonText="View Adopter Application" color="secondary" icon={<PlayArrowIcon />} />
                    //     </Grid>
                    //     <Grid item>
                    //         <ApplyButton toLink="/appAnswersFoster" buttonText="View Foster Application" color="secondary" icon={<PlayArrowIcon />} />
                    //     </Grid>
                    //     <Grid item>
                    //         <ViewAppAnswersBtn toLink={`/appAnswersUser/${props.id}`} buttonText="View Application Submissions" color="secondary"/>
                    //     </Grid>
                    // </React.Fragment>
            : null }

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