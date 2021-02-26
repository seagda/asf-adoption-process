import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MultiSelectChips from "../components/MultiSelectChips"

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        width: "100%",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
        }
    }
}));

export default function RoleTitleEdit(){
    const classes = useStyles();
    const names = ["Adopter", "Foster", "Regional", "Volunteer", "Rescuer", "Transporter", "Placement"]

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item>
                    <Typography variant="h4">Role Title</Typography>
                </Grid>
            </Grid>
            <Grid container justify="space-between">
                <Grid item style={{marginTop: "1em"}}>
                    <Typography>Adopter, Foster</Typography>
                </Grid>
                <Grid item>
                    <MultiSelectChips names={names} title="Add Role(s)"/>
                </Grid>
            </Grid>
        </Grid>
    )
}