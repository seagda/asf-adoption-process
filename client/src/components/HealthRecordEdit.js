import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import SingleSelect from "../components/SingleSelect";
import MultiSelectChips from "../components/MultiSelectChips";
import UploadButton from "../components/UploadButton";
import MultiLineText from "../components/MultiLineText";


const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    },
    largeTextfield: {
        minWidth: "60em",
        [theme.breakpoints.down("sm")]:{
            minWidth: "20em"
        }
    }
}));

export default function HealthRecordEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">Medical Issues</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container>
            {/* <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Vaccinations"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Has Vet"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Has Medical Issues"/>
            </Grid> */}
            <Grid item container style={{marginTop: "1em"}} justify="center">
                <TextField className={classes.largeTextfield} label="Known medical issues" InputLabelProps={{shrink: true}} rows={4} multiline variant="outlined" onChange={props.handleInputChange} value={props.dogData.medicalIssues} name="medicalIssues"/>
            </Grid>
        </Grid>
        <Grid container>
            {/* <Grid item style={{marginTop: "1em"}}>
                <UploadButton buttonText="Upload Documents" toLink=""/>
            </Grid> */}
        </Grid>
    </Grid>
    )
}