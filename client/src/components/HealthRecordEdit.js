import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import SingleSelect from "../components/SingleSelect";
import MultiSelectChips from "../components/MultiSelectChips";
import UploadButton from "../components/UploadButton";
import MultiLineText from "../components/MultiLineText";


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

export default function HealthRecordEdit(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item style={{marginTop: "3em"}}>
                    <Typography variant="h4">Health Record</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="Vaccinations"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="Has Vet"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <SingleSelect title="Has Medical Issues"/>
                </Grid>
                <Grid item style={{marginTop: "1em"}}>
                    <MultiLineText label="Medical Issues Details"/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <UploadButton buttonText="Upload Documents" toLink=""/>
                </Grid>
            </Grid>
        </Grid>
    )
}