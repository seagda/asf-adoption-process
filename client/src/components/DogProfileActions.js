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
    },
    button: {
        maxWidth: '500px', 
        maxHeight: '40px', 
        minWidth: '500px', 
        minHeight: '40px'
    }
}));

export default function DogProfileActions(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <EditButton className={classes.button} toLink={"/editDog/" + props.id} buttonText="Edit Dog Info"/>
            </Grid>
            <Grid item>
                <EditButton className={classes.button} toLink={"/behavior/" + props.id} buttonText="Complete Behavior Assessment"/>
            </Grid>
            <Grid item>
                <EditButton className={classes.button} toLink={"/dogDocument/" + props.id} buttonText="View or Upload Documents"/>
            </Grid>
        </Grid>
    )
}