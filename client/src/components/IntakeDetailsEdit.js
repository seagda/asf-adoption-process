import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import SingleSelect from "../components/SingleSelect";
import UploadButton from "../components/UploadButton";


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

export default function IntakeDetailsEdit(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item style={{marginTop: "3em"}}>
                    <Typography variant="h4">Intake Details</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="Intake Type"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="Current Location"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="ASF Users"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="View Documents"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <UploadButton buttonText="Upload Documents" toLink=""/>
                </Grid>
            </Grid>
        </Grid>
    )
}