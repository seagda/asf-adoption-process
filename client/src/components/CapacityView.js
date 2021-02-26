import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

export default function CapacityView(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item style={{marginTop: "3em"}}>
                    <Typography variant="h4">Capacity</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={4} sm={3} m={2} lg={2}>
                    <Typography style={{marginTop: "1em"}}>Max Capacity:</Typography>
                    <Typography style={{marginTop: "1em"}}>Dogs in care:</Typography>
                    <Typography style={{marginTop: "1em"}}>Available space:</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{marginTop: "1em"}}>4</Typography>
                    <Typography style={{marginTop: "1em"}}>3</Typography>
                    <Typography style={{marginTop: "1em"}}>1</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}