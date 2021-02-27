import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

import MultiSelectChips from "../components/MultiSelectChips";

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

export default function CapacityEdit(){
    const classes = useStyles();
    const names = ["Puppies", "Seniors", "Adults", "Medical Conditions"]

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container direction="row" justify={"space-between"}>
                <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Capacity</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em"}}>Max Capacity:</Typography>
                            <Typography style={{marginTop: "1.5em"}}>Dogs in care:</Typography>
                            <Typography style={{marginTop: "2em"}}>Available space:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <form>
                            <TextField type="number" style={{marginTop: "1em"}}></TextField>
                            <TextField type="number" style={{marginTop: "1em"}}></TextField>
                            <TextField type="number" style={{marginTop: "1em"}}></TextField>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                    <Typography variant="h4">Cares for:</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "3em"}}>
                        <Grid item>
                            <MultiSelectChips names={names} title="Select all that apply"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}